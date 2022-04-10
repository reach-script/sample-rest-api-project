import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/users">
            <a>User</a>
          </Link>
        </li>
        <li>
          <Link href="/suspense">
            <a>Suspense</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
