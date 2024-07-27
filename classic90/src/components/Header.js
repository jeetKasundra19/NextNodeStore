import Link from "next/link";
import styles from "./header.module.css";
import Marquee from "react-fast-marquee";

const headlineList = [
  {
    title: "Free shipping on U.S. orders $25 or more.",
  },
  {
    title: "Free shipping on U.S. orders $25 or more.",
  },
  {
    title: "Free shipping on U.S. orders $25 or more.",
  },
  {
    title: "Free shipping on U.S. orders $25 or more.",
  },
  {
    title: "Free shipping on U.S. orders $25 or more.",
  },
  {
    title: "Free shipping on U.S. orders $25 or more.",
  },
];

const navList = [
  {
    id: "1",
    link_name: "Payday Deals",
    link: "/",
  },
  {
    id: "2",
    link_name: "Best Seller",
    link: "/",
  },
  {
    id: "3",
    link_name: "Top",
    link: "/",
  },
  {
    id: "4",
    link_name: "Bottom",
    link: "/",
  },
  {
    id: "5",
    link_name: "Lifestyle",
    link: "/",
  },
  {
    id: "6",
    link_name: "About",
    link: "/",
  },
];

export default function Header() {
  return (
    <header>
      <div className={styles.headline_section}>
        <Marquee pauseOnHover={true}>
          {headlineList && headlineList.length > 0
            ? headlineList.map((headline, index) => (
                <div className={styles.headline_item} key={index}>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1213_89)">
                      <path
                        d="M16 9.26717H9.85245L14.1997 13.6144L13.1144 14.6997L8.76717 10.3524V16.5H7.23283V10.3524L2.88556 14.6997L1.80028 13.6144L6.14755 9.26717H0V7.73283H6.14755L1.80028 3.38556L2.88556 2.30028L7.23283 6.64755V0.5H8.76717V6.64755L13.1144 2.30028L14.1997 3.38556L9.85245 7.73283H16V9.26717Z"
                        fill="#EF9854"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1213_89">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 16.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{headline.title}</p>
                </div>
              ))
            : null}
        </Marquee>
      </div>
      <nav className={styles.navbar}>
        {navList &&
          navList.length > 0 &&
          navList.map((nav, i) => (
            <li key={i}>
              <Link href={nav.link}>{nav.link_name}</Link>
            </li>
          ))}
      </nav>
    </header>
  );
}
