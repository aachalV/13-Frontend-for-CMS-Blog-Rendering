import { getBlogByParams } from "../helper/fetchData";
import styles from "../styles/Blog.module.css";
export default function Blog(props) {
  console.log("BLOG+++>", props.blog[0].blog_image);
  return (
    <div className={styles["row"]}>
      <div id="root" className={styles["main"]}>
        <h2 className={styles["myBlog"]}>BLOG</h2>
        <div className={styles["blog-image"]}>
          <img src={props.blog[0].blog_image.url} alt="" />
        </div>
        <div className={styles["blog-content"]}>
          <h2>{props.blog[0].title}</h2>
          <h3>{props.blog[0].author}</h3>
          <p>{props.blog[0].content}</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let blog = await getBlogByParams({ id: context.params.id });
  console.log("Blog===>", blog);
  return {
    props: {
      blog: blog[0],
    },
  };
};
export async function getStaticPaths() {
  let data = await getBlogByParams();
  let paths = [
    ...data[0].map((blog) => {
      return {
        params: {
          id: blog.uid,
        },
      };
    }),
  ];
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
}
