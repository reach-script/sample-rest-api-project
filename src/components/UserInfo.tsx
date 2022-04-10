import { UserApi, Configuration } from "../generated";
import { VFC } from "react";
import useSWR from "swr";

const conf = new Configuration({
  basePath: "https://jsonplaceholder.typicode.com",
});
const userApi = new UserApi(conf);

export const UserInfo: VFC = () => {
  const { data: users } = useSWR("/api/users", () => userApi.getUsers(), {
    suspense: false,
  });

  if (!users) return <>not found user</>;
  return (
    <div>
      {users.map((user) => (
        <ul key={user.id}>
          <li>name: {user.name}</li>
          <li>email: {user.email}</li>
        </ul>
      ))}
      {/* <ul key={user.id}>
        <li>name: {user.name}</li>
        <li>email: {user.email}</li>
      </ul> */}
    </div>
  );
};
