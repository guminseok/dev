import Link from "next/link";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";

const ASideMenu = (props) => {
  return (
    <>
      <div className="relative min-h-screen md:flex">
        <div
          className={
            "sidebar bg-gray-800 w-40 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
          }
        >
          <nav>
            {/* <a
              href="/"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              投稿
            </a> */}

            <SMenu />
          </nav>
        </div>
      </div>
    </>
  );
};

export default ASideMenu;

const MenuLayout = (props) => {
  const { title, children, index, activeIndex, setActiveIndex } = props;
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <Link href={title.link}>
        <a
          onClick={() => handleSetIndex(index)}
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 "
        >
          <div className="hover:text-white text-blue-100 font-bold">
            {title.name}
          </div>
        </a>
      </Link>

      {activeIndex === index ? children : <></>}
    </>
  );
};

const Menu_Data = [
  {
    title: { name: "投稿", link: "/post" },
    subTitle: [
      { name: "投稿一覧", link: "/post" },
      { name: "新規投稿", link: "/post/new" },
      { name: "カテゴリー", link: "/post/category" },
      { name: "タグ", link: "/post/tag" },
    ],
  },
  {
    title: { name: "メディア", link: "/media" },
    // subTitle: [{ name: "mygenerictable", link: "/mygenerictable" }],
  },
  {
    title: { name: "ユーザー", link: "/user" },
    subTitle: [{ name: "新規追加", link: "/user/new" }],
  },
];

const SMenu = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const SubTitle = (props) => {
    const { name, link } = props;
    return (
      <Link href={link}>
        <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <div className="hover:text-white text-blue-100 font-bold">{name}</div>
        </a>
      </Link>
      // <div onClick={() => router.push(props.link)}>
      //   <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
      //     <div className="hover:text-white text-blue-100 font-bold">
      //       {props.name}
      //     </div>
      //   </a>
      // </div>
    );
  };

  return (
    <>
      {Menu_Data.map((mi, i) => {
        return (
          <MenuLayout
            key={"k" + "_" + mi.title.name}
            title={mi.title}
            index={i + 1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            {!!mi.subTitle && mi.subTitle.length > 0 ? (
              mi.subTitle.map((st, i) => {
                return (
                  <div
                    className="shadow-2xl shadow-gray-700/90 pl-3"
                    key={i + "_" + st.name}
                  >
                    <SubTitle name={st.name} link={st.link} />
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </MenuLayout>
        );
      })}
    </>
  );
};

// const SMenu = ({ subTitle }: MenuLink) => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const hasSubs = !!subTitle && subTitle?.length > 0;

//   const SubTitle = (props: { name: string; link: string }) => {
//     return (
//       <a
//         href={props.link}
//         className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-900 hover:text-white"
//       >
//         Sub: <div className="text-white font-bold">{props.name}</div>
//       </a>
//     );
//   };

//   return (
//     <>
//     {}
//       <MenuLayout
//         title={{ name: "投稿", link: "#" }}
//         index={1}
//         activeIndex={activeIndex}
//         setActiveIndex={setActiveIndex}
//       >
//         {hasSubs ? (
//           subTitle.map((st) => {
//             return <SubTitle name={st.name} link={st.link} />;
//           })
//         ) : (
//           <></>
//         )}
//       </MenuLayout>

//       <MenuLayout
//         title={{ name: "メディア", link: "#" }}
//         index={2}
//         activeIndex={activeIndex}
//         setActiveIndex={setActiveIndex}
//       >
//         {hasSubs ? (
//           subTitle.map((st) => {
//             return <SubTitle name={st.name} link={st.link} />;
//           })
//         ) : (
//           <></>
//         )}
//       </MenuLayout>

//       <MenuLayout
//         title={{ name: "ユーザー", link: "#" }}
//         index={3}
//         activeIndex={activeIndex}
//         setActiveIndex={setActiveIndex}
//       >
//         {hasSubs ? (
//           subTitle.map((st) => {
//             return <SubTitle name={st.name} link={st.link} />;
//           })
//         ) : (
//           <></>
//         )}
//       </MenuLayout>
//     </>
//   );
// };
