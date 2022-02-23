import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import { unstable_composeClasses } from "@mui/material";

export default function Home({ pizzaList }) {
  console.log("Home:" + pizzaList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
      </Head>

      {/* <Featured /> */}
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: products.data,
    },
  };
};
