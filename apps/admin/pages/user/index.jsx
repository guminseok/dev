/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Table_G } from "../../components/Table_G";
import { userIchiranHead2 } from "../../mock-data/mock_data";
import { userData } from "../../mock-data/users_Data";
import { PPTitles } from "../../utils/util_const";
import Image from "next/image";

const Category = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const pTitle = PPTitles.ユーザー;

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
          <h1>{pTitle}yyyyyyyy</h1>
          {/* <UserUpdate /> */}
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
  const discLabels = [
    "user_name",
    "name",
    "mail",
    "user_group",
    "posts",
    "last_modified",
  ];

  return (
    <>
      <div className={" flex-1 h-full ml-4 mb-6"}>
        <Table_G
          head={userIchiranHead2}
          rows={userData}
          disc={discLabels}
          type={title}
        />
      </div>

      <div
        className={
          " flex flex-col h-fit bg-green-000 mx-4 mb-6 items-center content-center space-y-4"
        }
      ></div>
    </>
  );
};

export const UserUpdate = (props) => {
  const [currentSelected, setCurrentSelected] = useState("権限グループを選ぶ");
  const [isHidden, setIsHidden] = useState(true);
  const [userPicture, setUserPicture] = useState(
    "https://media.vwcity.net/wp-content/uploads/2022/10/banner2_s.jpg"
  );
  const { e, i } = props;
  const options = [
    { value: "1", content: "gg1" },
    { value: "2", content: "gg2" },
    { value: "3", content: "gg3" },
  ];
  const tdClassName =
    "py-3 px-2 w-60 font-medium text-gray-900 dark:text-white";
  return (
    <>
      <>
        <td
          key={"table-cell_" + i}
          id={e[0]}
          className={tdClassName}
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
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
        <div className="relative p-4 w-8/12 max-w-full h-full md:h-auto">
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
                <div className="flex flex-row justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed dark:bg-gray-700 dark:border-gray-600">
                  <div className="h-full w-8/12 flex justify-center items-center">
                    <div className="flex flex-col h-full">
                      <img
                        className="flex-1 w-12/12 my-8"
                        src={userPicture}
                        draggable="false"
                        alt=""
                        layout="fill"
                      />
                      {/* <div className="attachment-actions">
                        <button
                          type="button"
                          className="button edit-attachment"
                        >
                          画像を編集
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="h-full w-4/12 flex justify-center items-center border-l-2 border-dotted border-l-gray-300 bg-red-000 overflow-y-scroll dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex flex-col h-full w-full justify-center items-center my-2 mx-4">
                      <div className="w-full flex border-b-2 dark:border-gray-600 justify-center items-center">
                        <div className="flex flex-col w-10/12">
                          <form className="space-y-4">
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

                            <div className="mb-4 flex-row">
                              {/* <label
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                              >
                                権限グループ
                              </label> */}

                              <select
                                onChange={(event) =>
                                  setCurrentSelected(event.target.value)
                                }
                                value={currentSelected}
                                id="権限グループを選ぶ"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                {options.map((option) => (
                                  <option
                                    value={option.value}
                                    key={option.content}
                                  >
                                    {option.content}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="mb-4 flex-row">
                              <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                              >
                                ユーザー情報
                              </label>

                              <textarea
                                id="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                              ></textarea>
                            </div>

                            <div className="mb-4 flex-row">
                              <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                              >
                                プロフィール写真
                              </label>

                              <input
                                onChange={() => {}}
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="https://media.vwcity.net/wp-content/uploads/2022/10/banner2_s.jpg"
                                value={userPicture}
                              />
                            </div>

                            <div className="mb-4 flex-row">
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

                            <div className="flex items-start  mb-4 flex-row"></div>
                          </form>
                        </div>
                      </div>

                      <UserButtons />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const UserButtons = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center my-4">
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-2 py-2 mx-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        更新
      </button>

      <button
        type="submit"
        className="text-red-100 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs w-full sm:w-auto px-2 py-2 mx-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        完全に削除する
      </button>
    </div>
  );
};
