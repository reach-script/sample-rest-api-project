import { Suspense, useEffect, VFC } from "react";
import useSWR, { useSWRConfig } from "swr";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetcher = async (key: string) => {
  const response = await fetch(key);
  return await response.json();
};

export const PostInfo: VFC = () => {
  const { data } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    { suspense: true }
  );
  const { mutate } = useSWRConfig();

  const onClickRefetch = () => {
    mutate("https://jsonplaceholder.typicode.com/posts");
  };
  return (
    <>
      <h1>hello suspense</h1>
      <button onClick={onClickRefetch}>refetch</button>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
