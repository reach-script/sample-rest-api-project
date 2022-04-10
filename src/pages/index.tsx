import { NextPage } from "next";
import { Suspense } from "react";
import { UserInfo } from "../components/UserInfo";

const Home: NextPage = () => {
  const onClickFetchTasks = async () => {
    //
    fetch("http://localhost:3000/api/tasks");
  };
  return (
    <>
      <button type="button" onClick={onClickFetchTasks}>
        fetch
      </button>
      <UserInfo />
    </>
    // <Suspense fallback={<div>loading...</div>}>
    // </Suspense>
  );
};

export default Home;
