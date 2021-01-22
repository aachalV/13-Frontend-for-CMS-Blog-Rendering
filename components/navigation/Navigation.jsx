import styles from "../../styles/Home.module.css";
// import { useRouter } from "next/router";

export default function Navigation() {
  return (
    <div id="nav" className={styles["navbar"]}>
      <div>
        <img
          src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/bltc1a71705f49d391d/5de663548d1dce6ad6bed8bf/header-logo.svg?format=pjpg&width=220"
          alt="Logo"
          className={styles["logo"]}
        />
      </div>
      <div className={styles["nav-links"]}>
        <a href={"/"}>Home</a>
        <a href={"#contact"}>Contact Us</a>
      </div>
    </div>
  );
}
