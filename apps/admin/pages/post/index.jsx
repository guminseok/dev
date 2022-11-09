import { Table_G } from "../../components/Table_G";
import { PPTitles } from "../../utils/util_const";
import getAllPosts from "../api/posts/getPosts";

const PostList = ({ postList }) => {
  const pTitle = PPTitles.投稿一覧;
  postList = JSON.parse(postList);
  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <div className="flex-none bg-red-000 h-16">
          <h1>{pTitle}</h1>
        </div>
        <div className="flex-initial bg-green-000 h-full">
          <div className="bg-white flex h-full">
            <Main_L postList={postList} />

            <Side_L />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;

const Main_L = ({ postList }) => {
  const usersHead = {
    id: "id",
    title: "タイトル",
    user: "投稿者",
    categoryList: "カテゴリー",
    tagList: "タグ",
    status: "ステータス",
    media_featured: "サムネイル",
    date_modified: "更新した時間",
    date_published: "投稿した時間",
  };

  const discLabels = [
    "title",
    "user",
    "categoryList",
    "tagList",
    "status",
    "media_featured",
    "date_modified",
    "date_published",
  ];
  return (
    <div className={" flex-1 h-full ml-4 mb-6"}>
      <Table_G
        head={usersHead}
        // rows={toukouIchiranRows}
        rows={postList}
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

export async function getServerSideProps(context) {
  const postList = await getAllPosts();

  return {
    props: { postList: postList },
  };
}
