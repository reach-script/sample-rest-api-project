import { NextPage } from "next";
import { Suspense } from "react";
import { PostInfo } from "../../components/post/PostInfo";

const Page: NextPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <PostInfo />
    </Suspense>
  );
};

export default Page;
