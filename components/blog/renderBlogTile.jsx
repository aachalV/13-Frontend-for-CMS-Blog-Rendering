import Link from "next/link";

import styles from "../../styles/Home.module.css";

export default function RenderBlogTile(props) {
  return (
    <Link href={props.blog.uid}>
      <div className={styles["employee-card"]}>
        <div className={styles["employee-image-container"]}>
          <img
            className={styles["employee-image"]}
            src={props.blog.blog_image.url}
            alt=""
          />
        </div>
        <p>{props.blog.title}</p>
      </div>
    </Link>
  );
}
