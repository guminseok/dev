import { useState } from "react";
import { flatStore, useKijiStore } from "../../utils/updateStore";
import Tiptap from "../../components/tiptap/TipTap";
import { useRouter } from "next/router";

const New = () => {
  const pTitle = "新規投稿を追加";

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <div className="flex-none bg-red-000 h-16">
          <h1>{pTitle}</h1>
        </div>
        <div className="flex-initial bg-green-000 h-full">
          <div className="bg-white flex h-full">
            <Main_L pid={flatStore.id} />

            <Side_L />
          </div>
        </div>
      </div>
    </>
  );
};

export default New;

const Main_L = ({ pId }) => {
  return (
    <div className="flex-initial w-10/12 h-full ml-4">
      <Tiptap pId={pId} />
    </div>
  );
};

const Side_L = () => {
  return (
    <div className=" flex flex-col w-3/12 h-fit bg-green-000 mx-4 items-center content-center space-y-4">
      <KouKai />
      <DropDownSearch title={"カテゴリー"} />
      <DropDownSearch title={"タグ"} />
    </div>
  );
};

export const KouKai = () => {
  const title = "公開";
  return (
    <div className="bg-orange-000 h-auto w-64 border-2">
      <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-2 px-4">
              {title}
            </th>
            <th scope="col" className="py-2 px-2"></th>
            <th scope="col" className="py-2 px-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700">
            <th
              scope="row"
              className="py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-sm"
              >
                下書保存
              </a>
            </th>
            <td className="py-2 px-2 font-bold"></td>
            <td className="py-2 px-2">
              <a
                href="#"
                className="font-sm text-blue-600 dark:text-blue-500 hover:underline"
              >
                プレビュー
              </a>
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ステータス:
            </th>
            <td className="py-2 px-2 font-bold">{"下書き"}</td>
            <td className="py-2 px-2">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                編集
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              公開状態:
            </th>
            <td className="py-2 px-2 font-bold">{"公開"}</td>
            <td className="py-2 px-2">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                編集
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              公開する予約:
            </th>
            <td className="py-2 px-2 font-bold">{"???"}</td>
            <td className="py-2 px-2">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                編集
              </a>
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700">
            <td
              scope="row"
              className="py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-sm"
              >
                ゴミ箱へ移動
              </a>
            </td>
            <td className="py-2 px-2 font-bold"></td>
            <Koukai />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Koukai = () => {
  const router = useRouter();
  const isNewPostPath = router.pathname == "/post/new" ? true : false;
  const storePost = useKijiStore((state) => state.post);
  const submitNewPost = async (e) => {
    e.preventDefault();
    try {
      const body = storePost;
      body.status = "公開済み";
      const response = await fetch(`/api/posts/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jRes = await response.json();
      const id = jRes.id;
      console.log("submitNewPost response: response::", jRes, id);
      router.push(`/post`);
    } catch (error) {
      console.error(error);
    }
  };
  const submitEditPost = async (e) => {
    e.preventDefault();
    try {
      const body = storePost;
      const response = await fetch(`/api/posts/edit/${storePost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("submitEditPost result:", await response.json());
      router.push(`/post`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <td className="py-2 px-2">
      <a
        onClick={(e) => {
          isNewPostPath ? submitNewPost(e) : submitEditPost(e);
        }}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        公開
      </a>
    </td>
  );
};

export const DropDownSearch = (props) => {
  const { title } = props;
  const optionList = [
    "TOPICS",
    "ブロックチェーン",
    "メタバース",
    "投資",
    "注目の投資",
  ];
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const Option = (props) => {
    const { cat } = props;
    return (
      <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input
            id={cat + `-checkbox`}
            type="checkbox"
            value={cat}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onChange={handleOnChange}
            checked={isChecked}
          ></input>
          <label
            htmlFor={cat + `-checkbox`}
            className="py-2 ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
          >
            {cat}
          </label>
        </div>
      </li>
    );
  };

  return (
    <div
      id="dropdownSearch"
      className={"z-10 w-60 bg-white rounded shadow dark:bg-gray-700"}
      style={{ marginBottom: "20px" }}
    >
      <div className="flex-none h-8 ml-2 mt-2">{title}</div>
      <div className="p-3">
        <label className="sr-only">検索</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-search"
            className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="検索"
          ></input>
        </div>
      </div>
      <ul
        className="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownSearchButton"
      >
        {optionList.map((li) => {
          return <Option key={li} cat={li} />;
        })}
      </ul>
    </div>
  );
};
