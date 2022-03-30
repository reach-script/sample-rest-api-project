import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const onClickFetch = async () => {
    const result = await fetch("http://localhost:3000/api/users/2", {
      method: "GET",
    });
    console.log("result", result);
  };
  return (
    <div className={styles.container}>
      <button type="button" onClick={onClickFetch}>
        login
      </button>
    </div>
  );
};

export default Home;
