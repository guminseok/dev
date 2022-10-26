import Head from "next/head";

const Home = () => {
  return (
    <div className={"flex h-screen w-screen bg-purple-000"}>
      <Head>
        <title>投稿</title>
        <meta name="description" content="投稿" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
