import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { getBlogByParams } from "../helper/fetchData";
import RenderBlogTile from "../components/blog/renderBlogTile";

function Home(props) {
  return (
    <div>
      <Navigation />
      <h1 className={styles["heading"]}>Blog List</h1>
      <div className={styles["employees-container"]}>
        {props.data[0].map((blog) => {
          return <RenderBlogTile blog={blog} key={blog.uid} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  let allBlogs = await getBlogByParams();

  return {
    props: {
      data: allBlogs,
    },
  };
};
export default Home;
