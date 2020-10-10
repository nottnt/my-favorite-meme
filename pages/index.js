import React from "react";
import Head from "next/head";
import Nav from "@/components/Nav/nav";
import GridListImage from "@/components/GridListImage/gridListImage";
import mockData from "@/utils/mockData.json";

const Home = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <GridListImage imageData={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((res) => res.json());
  console.log("getServerProps");

  return {
    props: { data: mockData },
  };
}

export default Home;
