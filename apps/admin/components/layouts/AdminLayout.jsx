import React, { Fragment } from "react";
import Header from "./Header";
import ASideMenu from "./ASideMenu";

const AdminLayout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-col h-screen w-screen">
        <Header />

        {/* <HeaderL2 /> */}

        <div className="flex flex-1 overflow-hidden">
          {/* <Aside /> */}
          <ASideMenu />

          <main className="flex flex-1 bg-blue-000 overflow-y-auto paragraph w-screen h-auto">
            {/* <Content /> */}
            {children}
          </main>
        </div>
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};

export default AdminLayout;

const Content = () => {
  const ma = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  const divi = <div>CONTENT</div>;

  return (
    <div>
      {ma.map((num) => {
        return divi;
      })}
    </div>
  );
};

const HeaderL2 = () => {
  return <div className="flex bg-pink-300 h-8 items-center">Subheader</div>;
};

const Aside = () => {
  return (
    <aside className="hidden sm:block bg-green-300 w-40">
      <ASideMenu />
    </aside>
  );
};

const Main = ({ main }) => {
  return (
    <main className="flex flex-1 bg-blue-300 overflow-y-auto paragraph px-4">
      <Content />
      {main.children}
    </main>
  );
};

const Footer = () => {
  return <div className="flex bg-yellow-300">Footer</div>;
};

{
  /* <style jsx>{`
  main {
    color: red;
    background: yellow;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    scrollbar-width: none;
  }
`}</style>; */
}
