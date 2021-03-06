import { getBlogByParams } from "../helper/fetchData";
import Navigation from "../components/navigation/Navigation";
import styles from "../styles/Blog.module.css";

import Link from "next/link";
import Footer from "../components/footer/Footer";
export default function Blog(props) {
  return (
    <div>
      <Navigation />
      <div className={styles["row"]}>
        <div id="root" className={styles["main"]}>
          <h2 className={styles["myBlog"]}>BLOG</h2>
          <div className={styles["blog-image"]}>
            <img src={props.blog[0].blog_image.url} alt="" />
          </div>
          <div className={styles["blog-content"]}>
            <h2>{props.blog[0].title}</h2>
            <h3>{props.blog[0].author}</h3>
            <p>{props.blog[0].blog_content}</p>
            <br />
          </div>
        </div>
        {/* Related links */}
        <div id="related-links" className={styles["side"]}>
          <h2>Related Links</h2>
          <ul>
            {props.blog[0].related_links
              ? props.blog[0].related_links.map((blog) => {
                  return (
                    <li key={blog.uid}>
                      <Link href={`/${blog.uid}`}>{blog.title}</Link>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let blog = await getBlogByParams({ id: context.params.id });
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

  return {
    paths,
    fallback: false,
  };
}
