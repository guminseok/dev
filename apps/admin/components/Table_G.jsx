import { useRouter } from "next/router";
import { useState } from "react";

import { MediaUpdate } from "../pages/media";
import { CategoryUpdate } from "../pages/post/category";
import { UserUpdate } from "../pages/user";
import { PPTitles } from "../utils/util_const";

export const Table_G = (props) => {
  const { head, rows, disc, type } = props;
  const [tableDisplay, setTableDisplay] = useState(true);

  const isCatTagType =
    type == PPTitles.新規カテゴリー || type == PPTitles.新規タグ;
  const isUserType = type == PPTitles.ユーザー;
  const isMediaType = type === PPTitles.メディアライブラリ;
  const isPostType = type === PPTitles.投稿一覧;
  const updateType =
    type == PPTitles.新規カテゴリー
      ? PPTitles.カテゴリー編集
      : PPTitles.タグ編集;
  const router = useRouter();

  const TH = (props) => {
    const { accessor, label } = props;
    return (
      <th scope="col" id={accessor} className="py-2 px-2">
        <div className="flex items-center">
          {label}
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 w-3 h-3"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 320 512"
            >
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
            </svg>
          </a>
        </div>
      </th>
    );
  };

  const GridNode = ({ post }) => {
    const values = Object.values(post);
    const keys = Object.keys(post);
    const useEntries = [];
    disc.map((d) => {
      const matchId = keys.findIndex((k) => k == d);
      if (matchId !== undefined) {
        useEntries.push([keys[matchId], values[matchId]]);
      }
    });

    return (
      <div className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-blue-300 hover:border-2">
        {useEntries.map((e, i) => {
          return isMediaType && e[0] == "slug" ? (
            <MediaUpdate e={e} i={i} value={values[2]} isGrid={true} />
          ) : (
            <></>
          );
        })}
      </div>
    );
  };

  const Post_TR = ({ post }) => {
    const values = Object.values(post);
    const keys = Object.keys(post);
    const useEntries = [];
    disc.map((d) => {
      const matchId = keys.findIndex((k) => k == d);
      if (matchId !== undefined) {
        useEntries.push([keys[matchId], values[matchId]]);
      }
    });
    const tdClassName =
      "py-3 px-2 w-60 font-medium text-gray-900 dark:text-white";
    return (
      <tr
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        onClick={() => {}}
      >
        <td className="p-4 m-2">
          <div className="flex items-center">
            <input
              id={post.id}
              type="checkbox"
              className="w- h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-2" className="sr-only">
              checkbox
            </label>
          </div>
        </td>

        {useEntries.map((e, i) => {
          // const isTitle = e[0] == "title" ? true : false;
          const isCatTag = isCatTagType && e[0] == "name" ? true : false;
          const isUser = isUserType && e[0] == "name" ? true : false;
          const isMedia = isMediaType && e[0] == "slug";
          const isPostTT = isPostType && e[0] == "title";
          return isCatTag ? (
            <CategoryUpdate e={e} i={i} type={updateType} />
          ) : isUser ? (
            <UserUpdate e={e} i={i} />
          ) : isMedia ? (
            <MediaUpdate e={e} i={i} value={values[2]} isGrid={false} />
          ) : isPostTT ? (
            <div onClick={() => router.push("/post/new")}>
              <a className="block py-1 px-2 rounded transition duration-200 w-60">
                <div className=" text-blue-600 font-bold">{e[1]}</div>
              </a>
            </div>
          ) : // <MediaUpdate e={e} i={i} value={values[2]} isGrid={false} />
          e[0] == "thumbnail" ? (
            <td key={e[0] + i + e[1]} className={tdClassName}>
              <img src={e[1]}></img>
            </td>
          ) : (
            <td key={"table-cell_" + i} id={e[0]} className={tdClassName}>
              {e[1]}
            </td>
          );
        })}
      </tr>
    );
  };
  let TopOp = () => {
    return <></>;
  };
  switch (type) {
    case "メディアライブラリ":
      TopOp = () => {
        return (
          <div className="flex justify-between">
            <ListGridButton
              tableDisplay={tableDisplay}
              setTableDisplay={setTableDisplay}
            />
            <Filter
              title={"すべてのメディア"}
              activePage={undefined}
              count={undefined}
              rowsPerPage={undefined}
              totalPages={undefined}
              setActivePage={undefined}
            />
            <Filter
              title={"すべての日付"}
              activePage={undefined}
              count={undefined}
              rowsPerPage={undefined}
              totalPages={undefined}
              setActivePage={undefined}
            />
            <Search title={"メディア"} />
          </div>
        );
      };
      break;
    case "ユーザー":
      TopOp = () => {
        return (
          <div className="flex justify-between">
            <Filter
              title={"権限グループ"}
              activePage={undefined}
              count={undefined}
              rowsPerPage={undefined}
              totalPages={undefined}
              setActivePage={undefined}
            />
            <Search title={"ユーザー"} />
          </div>
        );
      };
      break;
    case PPTitles.新規カテゴリー:
      TopOp = () => {
        return (
          <div className="flex justify-between">
            <DeleteAll title={"削除"} />

            <Search title={"カテゴリー"} />
          </div>
        );
      };
      break;
    case PPTitles.新規タグ:
      TopOp = () => {
        return (
          <div className="flex justify-between">
            <DeleteAll title={"削除"} />

            <Search title={"タグ"} />
          </div>
        );
      };
      break;

    case "投稿一覧":
      TopOp = () => {
        return (
          <div className="flex justify-between">
            <DeleteAll title={"ゴミ箱へ移動"} />
            <Filter
              title={"ステータス"}
              activePage={undefined}
              count={undefined}
              rowsPerPage={undefined}
              totalPages={undefined}
              setActivePage={undefined}
            />
            <Filter
              title={"カテゴリー"}
              activePage={undefined}
              count={undefined}
              rowsPerPage={undefined}
              totalPages={undefined}
              setActivePage={undefined}
            />
            <Filter
              title={"すべての日付"}
              activePage={undefined}
              count={undefined}
              rowsPerPage={undefined}
              totalPages={undefined}
              setActivePage={undefined}
            />
            <Search title={"投稿一覧"} />
          </div>
        );
      };
      break;

    default:
      <div className="flex justify-between">
        <Search title={""} />
      </div>;
      break;
  }

  return (
    <div className="flex flex-col relative shadow-md sm:rounded-lg">
      <TopOp />

      {tableDisplay ? (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {disc.map((d) => {
                const label = head[d];

                return <TH key={d + "_th"} accessor={d} label={label} />;
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((al, i) => {
              return <Post_TR key={"Post_TR_key" + i} post={al} />;
            })}
          </tbody>
        </table>
      ) : (
        <div className="grid gap-4 grid-cols-8 grid-rows-8 w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {rows.map((al, i) => {
            return <GridNode key={"Grid_key" + i} post={al} />;
          })}
        </div>
      )}

      <GenericPagination
        activePage={undefined}
        count={undefined}
        rowsPerPage={undefined}
        totalPages={undefined}
        setActivePage={undefined}
      />
    </div>
  );
};

const Filter = ({ title, count, rowsPerPage, totalPages, setActivePage }) => {
  // const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  // const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <div>
          <button
            id="dropdownRadioButton"
            data-dropdown-toggle="dropdownRadio"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <svg
              className="mr-2 w-4 h-4 text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            {title}
            <svg
              className="ml-2 w-3 h-3"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdownRadio"
            className="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="top"
          >
            <ul
              className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownRadioButton"
            >
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-1"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-1"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last day
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    checked={true}
                    id="filter-radio-example-2"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-2"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last 7 days
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-3"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-3"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last 30 days
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-4"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-4"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last month
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-5"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-5"
                    className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last year
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const Search = ({ title }) => {
  // const title = props;
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
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
            id="table-search"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={title + "を検索"}
          />
        </div>
      </div>
    </>
  );
};

const GenericPagination = (props) => {
  const { title, count, rowsPerPage, totalPages, setActivePage } = props;
  // const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  // const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <>
      <nav
        className="flex justify-between items-center pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-500 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

const DeleteAll = (props) => {
  const { title } = props;
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <div>
          <button
            id="dropdownRadioButton"
            data-dropdown-toggle="dropdownRadio"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>

            {title}
          </button>
        </div>
      </div>
    </>
  );
};

const ListGridButton = (props) => {
  const { tableDisplay, setTableDisplay } = props;
  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => setTableDisplay(true)}
            type="button"
            className="py-1 px-3 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>

          <button
            onClick={() => setTableDisplay(false)}
            type="button"
            className="py-1 px-3 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
