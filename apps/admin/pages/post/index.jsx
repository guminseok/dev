import { Table_G } from "../../components/Table_G";
import {
  toukouIchiranHead2,
  toukouIchiranRows,
} from "../../mock-data/mock_data";
import { PPTitles } from "../../utils/util_const";

const Edit = () => {
  const pTitle = PPTitles.投稿一覧;

  // const submitData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = { title, content, user: "them" };
  //     await fetch("/api/post", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });
  //     // await router.push("/drafts");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <div className="flex-none bg-red-000 h-16">
          <h1>{pTitle}</h1>
        </div>
        <div className="flex-initial bg-green-000 h-full">
          <div className="bg-white flex h-full">
            <Main_L />

            <Side_L />
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;

const Main_L = () => {
  const discLabels = [
    "title",
    "contributor",
    "category",
    "tag",
    "publish_date",
    "status",
    "date_created",
    "thumbnail",
    "last_modified",
  ];
  return (
    <div className={" flex-1 h-full ml-4 mb-6"}>
      <Table_G
        head={toukouIchiranHead2}
        rows={toukouIchiranRows}
        disc={discLabels}
        type={PPTitles.投稿一覧}
      />
    </div>
  );
};

const Side_L = () => {
  return (
    <div
      className={
        "flex flex-col h-fit bg-green-000 mx-4 mb-6 items-center content-center space-y-4"
      }
    ></div>
  );
};

{
  /* <form onSubmit={submitData}>
          <h1>新規投稿を追加</h1>
          <br />
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="タイトルを追加"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => {
              setContent(e.target.value);
              // if (globalContext != null) {
              // globalContext.content = e.target.value;
              // }
            }}
            placeholder="Content"
            rows={8}
            value={post.content}
          />
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => router.push("/")}>
            or Cancel
          </a>
        </form> */
}
