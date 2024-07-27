import style from "./blog.module.css";
import Link from "next/link";

export default function BlogBox() {
  return (
    <div className={style.blog_box}>
      <Link href="/" className={style.blog_image}></Link>
      <div>
        <h3 className={style.title}>
          The 5 Golden Rules of Athleisure: Is It Really Acceptable to Wear Yoga
          Pants All Day Long?
        </h3>
        <p className={style.description}>
          Blame the designer athleisure boom or the annual glut of New Year’s
          resolutions to hit the gym on the regular, but this month you can
          expect to see even more women than usual wearing workout gear.
        </p>
      </div>
      <Link href="/" className={`btn type1 ${style.blog_btn}`}>
        Read Article
      </Link>
    </div>
  );
}
