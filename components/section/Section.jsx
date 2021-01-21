export default function Section({ styles, section }) {
  return (
    <section className={styles["section"]}>
      <h1>{section.sectionHeading}</h1>
      <div className={styles["section-division"]}>
        <div className={styles["section-image"]}>
          <img src={section.sectionImage} alt="" />
        </div>
        <div className={styles["section-container"]}>
          {section.sectionContent.map((content) => {
            return (
              <div className={styles["section-content"]} key={content.id}>
                <h2>{content.subHeading}</h2>
                <p>{content.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
