import { UserApi, Configuration } from "../generated";
import { VFC } from "react";
import useSWR, { useSWRConfig } from "swr";

const conf = new Configuration({
  basePath: "https://jsonplaceholder.typicode.com",
});
const userApi = new UserApi(conf);

export const UserInfo: VFC = () => {
  const { data: users, error } = useSWR("/api/users", () => userApi.getUsers());
  const { mutate } = useSWRConfig();
  const onClickRefetch = () => {
    mutate("/api/users");
  };

  if (error) return <>error</>;
  if (!users) return <>not users</>;
  return (
    <div>
      <button onClick={onClickRefetch}>refetch</button>
      {users.map((user) => (
        <ul key={user.id}>
          <li>name: {user.name}</li>
          <li>email: {user.email}</li>
        </ul>
      ))}
    </div>
  );
};
