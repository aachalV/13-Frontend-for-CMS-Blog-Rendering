import Link from "next/link";
// import { useRouter } from "next/router";

export default function Navigation({ styles, navigationLinks }) {
  return (
    <div id="nav" className={styles["navbar"]}>
      <div>
        <img
          src={navigationLinks.logo.src}
          alt={navigationLinks.logo.alt}
          className={styles["logo"]}
        />
      </div>
      <div className={styles["nav-links"]}>
        {navigationLinks.links.map((link) => {
          return (
            <Link href={link.href} key={link.id}>
              <a>{link.display}</a>
            </Link>
          );
        })}

        <Link href={navigationLinks.contactUs.href}>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}
