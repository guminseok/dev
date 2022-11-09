import { useEffect, useState } from "react";

const Category = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const pTitle = "新規ユーザーを追加";

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content, user: "them" };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <div className="flex flex-none bg-red-000 h-16 my-3">
          <h1>{pTitle}</h1>
        </div>
        <div className="flex-initial bg-green-000 h-full">
          <div className="bg-white flex h-full">
            <M_S_Layout title={pTitle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

const M_S_Layout = (props) => {
  const { title } = props;

  return (
    <>
      <div className={"w-6/12 flex-1 h-full ml-4 mb-6"}>
        <NewUserForm title={""} />
      </div>

      <div
        className={
          "w-6/12 flex flex-col h-fit bg-green-000 mx-4 mb-6 items-center content-center space-y-4"
        }
      ></div>
    </>
  );
};

export const NewUserForm = (props) => {
  const { title } = props;
  const [currentSelected, setCurrentSelected] = useState("権限グループを選ぶ");
  const options = [
    { value: "1", content: "gg1" },
    { value: "2", content: "gg2" },
    { value: "3", content: "gg3" },
  ];
  return (
    <>
      <h2 className="mb-4">新規ユーザーを追加</h2>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            {/* <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              ユーザー名
            </label> */}
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ユーザー名"
            />
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              (必須)
            </label>
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="メール"
            />
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              (必須)
            </label>
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="名"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="姓"
            />
          </div>
        </div>

        <>
          <div className="mb-6">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              権限グループ
            </label>
            <select
              onChange={(event) => setCurrentSelected(event.target.value)}
              value={currentSelected}
              id="権限グループを選ぶ"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {options.map((option) => (
                <option value={option.value} key={option.content}>
                  {option.content}
                </option>
              ))}
            </select>
          </div>
        </>

        <div className="m4-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            パスワード
          </label>

          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            (必須)
          </label>
        </div>

        <div className="flex items-start mb-6"></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          新規{title}を追加
        </button>
      </form>
    </>
  );
};
