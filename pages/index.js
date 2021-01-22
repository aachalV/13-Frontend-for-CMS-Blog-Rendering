import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getBlogByParams } from "../helper/fetchData";
import RenderBlogTile from "../components/blog/renderBlogTile";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Blogs</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="#">Blogs section!</a>
//         </h1>

//         {/* <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p> */}

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Rights reserved by @ Aachal{" "}
//           {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
//         </a>
//       </footer>
//     </div>
//   );
// }

function Home(props) {
  return (
    <div>
      <h1 className={styles["heading"]}>Blog List</h1>
      <div className={styles["employees-container"]}>
        {props.data[0].map((blog) => {
          return <RenderBlogTile blog={blog} key={blog.id} />;
        })}
      </div>
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
