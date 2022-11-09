/* eslint-disable react-hooks/exhaustive-deps */
import Tiptap from "../../../components/tiptap/TipTap";
import { useKijiStore } from "../../../utils/updateStore";
import prisma from "../../../lib/prisma";
import { DropDownSearch, KouKai } from "../new";

const Edit = ({ post }) => {
  post = JSON.parse(post);
  const setPost = useKijiStore((state) => state.setPost);
  setPost(post);
  const pTitle = "新規投稿を追加";

  if (!!post) {
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
  }
};

export default Edit;

const Main_L = () => {
  return (
    <div className="flex-initial w-10/12 h-full ml-4">
      <Tiptap />
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

export async function getServerSideProps(context) {
  const pid = context.query.pid;
  const result = await prisma.post.findUnique({
    where: { id: pid },
  });
  const post = JSON.stringify(result);

  return {
    props: { post },
  };
}
