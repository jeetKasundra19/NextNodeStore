import styles from "./newsletter.module.css";

export default function NewsLetterSection() {
  return (
    <div className={styles.newsLetter_section}>
      <div className={styles.newsLetter_inner_container}>
        <div className={styles.newsLetter_content}>
          <h3>Sign up to the newsletter</h3>
          <p>
            Sign up to our newsletter to receive discounts, offers, and early
            access to sale, and whole lot of other fun things.
          </p>
        </div>
        <form className={styles.newsLetter_form}>
          <input type="email" placeholder="Whats your email address?" />
          <button className="btn type1">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
