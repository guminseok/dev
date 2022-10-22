/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Table_G } from "../../components/Table_G";
import { mediaData, mediaDataMock } from "../../mock-data/media_Data";
import { mediaHead, tagIchiranHead } from "../../mock-data/mock_data";
import { PPTitles } from "../../utils/util_const";
import Image from "next/image";

const Category = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const pTitle = PPTitles.メディアライブラリ;

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
          <NewMediaButton />
          {/* <MediaUpdate /> */}

          {/* <MediaForm /> */}
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
  const title = props;
  const discLabels = ["slug", "contributer", "post", "date"];
  return (
    <>
      <div className={"w-8/12 flex-1 h-full ml-4 mb-6"}>
        <Table_G
          head={mediaHead}
          rows={mediaDataMock}
          disc={discLabels}
          type={props.title}
        />
      </div>

      <div
        className={
          "w-4/12 flex flex-col h-fit bg-green-000 mx-4 mb-6 items-center content-center space-y-4"
        }
      ></div>
    </>
  );
};

const NewMediaButton = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <button
        onClick={() => setIsHidden(!isHidden)}
        type="button"
        className="h-10 block mx-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        新規追加
      </button>
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
        <div className="relative p-4 w-full max-w-5xl h-full md:h-auto">
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
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">ファイルを選択</span>
                      または ファイルをドロップしてアップロード
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      最大アップロードサイズ: 2 MB。
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                  ></input>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MediaUpdate = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const { e, i, value, isGrid } = props;
  const tdClassName =
    "py-3 px-2 w-60 font-medium text-gray-900 dark:text-white";
  return (
    <>
      <>
        {!isGrid ? (
          <td key={"table-cell_" + i} id={e[0]} className={tdClassName}>
            <div
              className="hover:text-blue-300 text-blue-700 font-bold"
              onClick={() => setIsHidden(!isHidden)}
            >
              <img src={value} alt={""} layout="fill"></img>
              {e[1]}
            </div>
          </td>
        ) : (
          <img
            src={value}
            onClick={() => setIsHidden(!isHidden)}
            alt={""}
            layout="fill"
          ></img>
        )}
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
        <div className="relative p-4 w-full max-w-full h-full md:h-auto">
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
                        src="https://media.vwcity.net/wp-content/uploads/2022/10/banner2_s.jpg"
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
                      <div className="flex-initial h-4/12 w-full flex-initail border-b-2 dark:border-gray-600">
                        <div className="flex flex-col my-4">
                          <div className="uploaded">
                            <strong>更新日:</strong> 2022年10月17日
                          </div>
                          <div className="uploaded-by">
                            <strong>アップロード:</strong>

                            <a href="https://media.vwcity.net/wp-admin/profile.php">
                              c.zander
                            </a>
                          </div>

                          <div className="filename">
                            <strong>ファイル名:</strong> banner2_s.jpg
                          </div>
                          <div className="file-type">
                            <strong>ファイルタイプ:</strong> image/jpeg
                          </div>
                          <div className="file-size">
                            <strong>ファイルサイズ:</strong> 48 KB
                          </div>

                          <div className="dimensions">
                            <strong>サイズ:</strong>
                            648 x 365 ピクセル{" "}
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex border-b-2 dark:border-gray-600 justify-center items-center">
                        <div className="flex flex-col w-10/12">
                          <form className="space-y-4">
                            <div className="mt-4 flex-row">
                              {/* <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                代替テキスト
                              </label> */}
                              <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="代替テキスト"
                              />
                            </div>

                            <div className=" flex-row">
                              {/* <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                タイトル
                              </label> */}
                              <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="タイトル"
                              />
                            </div>

                            <div className="flex-row">
                              {/* <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                              >
                                キャプション
                              </label> */}
                              <textarea
                                id="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="キャプション"
                              ></textarea>
                            </div>

                            <div className="mb-4 flex-row">
                              {/* <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                              >
                                説明
                              </label> */}
                              <textarea
                                id="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="説明"
                              ></textarea>
                            </div>

                            <div className="mb-4 flex-row">
                              <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                              >
                                ファイルの URL:
                              </label>
                              <input
                                id="message"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="https://media.vwcity.net/wp-content/uploads/2022/10/banner2_s.jpg"
                                value={
                                  "https://media.vwcity.net/wp-content/uploads/2022/10/banner2_s.jpg"
                                }
                              ></input>
                            </div>

                            <div className="flex items-start mb-6"></div>
                          </form>
                        </div>
                      </div>

                      <MediaButtons />
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

export const MediaButtons = () => {
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
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs w-full sm:w-auto px-2 py-2 mx-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        表示
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
