import { useState } from "react";
import { Table_G } from "../../components/Table_G";
import { categoryData } from "../../mock-data/category_Data";
import { tagIchiranHead } from "../../mock-data/mock_data";
import { PPTitles } from "../../utils/util_const";

const Category = () => {
  const pTitle = PPTitles.新規カテゴリー;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <div className="flex flex-none bg-red-000 h-16 my-3">
          <h1>{pTitle}</h1>
        </div>
        <div className="flex-initial bg-green-200 h-full">
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
  const discLabels = ["name", "description", "slug", "count"];
  return (
    <>
      <div className={" flex-1 h-full ml-4 mb-6"}>
        <h2 className="mb-4">{title}を追加</h2>
        <CTForm title={title} />
      </div>

      <div
        className={
          " flex flex-col h-fit bg-green-000 mx-4 mb-6 items-center content-center space-y-4"
        }
      >
        <Table_G
          head={tagIchiranHead}
          rows={categoryData}
          disc={discLabels}
          type={title}
        />
      </div>
    </>
  );
};

export const CTForm = ({ title }) => {
  const titleM =
    title == PPTitles.新規カテゴリー || title == PPTitles.カテゴリー編集
      ? "カテゴリー"
      : "タグ";
  const isNew = title == PPTitles.新規カテゴリー || title == PPTitles.新規タグ;
  const labelText =
    "block mb-2 text-xs font-medium text-gray-500 dark:text-gray-300";
  const [currentSelected, setCurrentSelected] = useState(""); // 親{title}を選ぶ
  const options = [
    { value: "1", content: "gg1" },
    { value: "2", content: "gg2" },
    { value: "3", content: "gg3" },
  ];

  return (
    <>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            {/* <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              名前
            </label> */}
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="名前"
            />
            <label htmlFor="first_name" className={labelText}>
              サイト上に表示される名前です。
            </label>
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="スラッグ"
            />
            <label htmlFor="first_name" className={labelText}>
              “スラッグ” は URL
              に適した形式の名前です。通常はすべて半角小文字で、英数字とハイフンのみが使われます。
            </label>
          </div>
        </div>

        {titleM == "カテゴリー" ? (
          <>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                子{titleM}
              </label>
            </div>
            <div className="mb-6">
              <label htmlFor="countries" className={labelText}>
                {/* 親カテゴリーを選ぶ */}
              </label>
              <select
                onChange={(event) => setCurrentSelected(event.target.value)}
                value={currentSelected}
                id={1}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {options.map((option) => (
                  <option value={option.value} key={option.content}>
                    {option.content}
                  </option>
                ))}
              </select>
              <label htmlFor="countries" className={labelText}>
                タグとは異なり、{titleM}
                は階層構造を持つことができます。たとえば、ジャズというカテゴリーの下にビバップやビッグバンドという子
                {titleM}
                を作る、といったようなことです。これはオプションです。
              </label>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="m4-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          ></label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="説明"
          ></textarea>
          <label htmlFor="message" className={labelText}>
            デフォルトではこの説明は目立つ使われ方はしませんが、テーマによっては表示されます。
          </label>
        </div>

        <div className="flex items-start mb-6"></div>

        {isNew ? (
          <>
            <CategoryButtons new={true} />
          </>
        ) : (
          <>
            <CategoryButtons new={false} />
          </>
        )}
      </form>
    </>
  );
};

export const CategoryUpdate = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const { e, i, type } = props;
  const tdClassName =
    "py-3 px-2 w-60 font-medium text-gray-900 dark:text-white";
  return (
    <>
      <>
        <td key={"table-cell_" + i} id={e[0]} className={tdClassName}>
          <div
            className="hover:text-blue-300 text-blue-700 font-bold"
            onClick={() => setIsHidden(!isHidden)}
          >
            {e[1]}
          </div>
        </td>
      </>
      <div
        id="authentication-modal"
        tabIndex={-1}
        className={
          isHidden
            ? "hidden "
            : "" +
              " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
        }
      >
        <div className="relative p-4 w-6/12 max-w-full h-full md:h-auto">
          {/* < />!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setIsHidden(!isHidden)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                {/* Sign in to our platform */}
              </h3>

              <div className="flex justify-center items-center w-full">
                <div className="flex flex-row justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed dark:bg-gray-700 dark:border-gray-600 p-6">
                  <CTForm title={type} />
                </div>
              </div>
            </div>
            {/* <CategoryButtons new={false} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const CategoryButtons = (props) => {
  const isNew = props;
  return (
    <div className="flex flex-row w-full justify-between items-center my-4">
      {isNew ? (
        <>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            新規を追加
          </button>
        </>
      ) : (
        <>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-2 py-2 mx-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            更新
          </button>
          {/* <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs w-full sm:w-auto px-2 py-2 mx-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            表示
          </button> */}
          <button
            type="submit"
            className="text-red-100 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs w-full sm:w-auto px-2 py-2 mx-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            完全に削除する
          </button>
        </>
      )}
    </div>
  );
};
