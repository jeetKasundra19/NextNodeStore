import styles from "./footer.module.css";

export default function Footer() {
  return <footer className={styles.footer_section}>
    <div></div>
    <div className={styles.footer_caption}>
        <p className={styles.copyright_text}>© Gemash V2 2023 all right reserved.</p>
        <ul className={styles.social_media_list}>
            <li></li>
        </ul>
    </div>
  </footer>;
}
