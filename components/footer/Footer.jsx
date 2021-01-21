import styles from "../footer/Footer.module.css";
export default function Footer() {
  return (
    <footer id="contact" className={styles["footer"]}>
      <p>email : aachal@gamil.com</p>
      <p className={styles["text"]}>
        © 2020 All Rights Reserved by <span>Aachal Vartak</span>
      </p>
      <div className={styles["social-links"]}>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/cute-clipart/40/000000/twitter.png" />
        </a>
        |
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/cute-clipart/40/000000/linkedin.png" />
        </a>
        |
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/cute-clipart/40/000000/facebook-new.png" />
        </a>
        |
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/fluent/40/000000/github.png" />
        </a>
      </div>
      <a id="upArrow" href="#nav">
        <img src="https://img.icons8.com/fluent/45/000000/logout-rounded-up.png" />
      </a>
    </footer>
  );
}
