import Link from "next/link";
import styles from "./header.module.css";
import Marquee from "react-fast-marquee";
import { SideDrawer } from "@/components";

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
                    <g clipPath="url(#clip0_1213_89)">
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
        <li className={styles.nav_options}>
          <button>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.969 18.3637L16.2226 14.6173C17.468 13.0753 18.216 11.1151 18.216 8.98365C18.2173 4.03024 14.1871 0 9.23365 0C4.28024 0 0.25 4.03024 0.25 8.98365C0.25 13.9371 4.28024 17.9673 9.23365 17.9673C11.3651 17.9673 13.3253 17.2193 14.8673 15.9739L18.6137 19.7203C18.8004 19.907 19.0459 20.0016 19.2913 20.0016C19.5368 20.0016 19.7823 19.9083 19.969 19.7203C20.3437 19.3457 20.3437 18.7383 19.969 18.3637ZM2.16794 8.98365C2.16794 5.08767 5.33767 1.91794 9.23365 1.91794C13.1296 1.91794 16.2994 5.08767 16.2994 8.98365C16.2994 12.8796 13.1296 16.0494 9.23365 16.0494C5.33767 16.0494 2.16794 12.8796 2.16794 8.98365Z"
                fill="#060707"
              />
            </svg>
          </button>
          <button>
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.166 21H2.08396C1.55461 21 1.125 20.5704 1.125 20.041C1.125 14.5264 5.61036 10.041 11.125 10.041C16.6396 10.041 21.125 14.5264 21.125 20.041C21.125 20.5704 20.6954 21 20.166 21ZM3.09917 19.0821H19.1508C18.6752 15.0762 15.2575 11.959 11.125 11.959C6.99254 11.959 3.57481 15.0762 3.09917 19.0821Z"
                fill="#060707"
              />
              <path
                d="M11.125 10.9373C8.38494 10.9373 6.15633 8.70873 6.15633 5.96867C6.15633 3.22862 8.38494 1 11.125 1C13.8651 1 16.0937 3.22862 16.0937 5.96867C16.0937 8.70873 13.8651 10.9373 11.125 10.9373ZM11.125 2.91791C9.44235 2.91791 8.07424 4.28603 8.07424 5.96867C8.07424 7.65132 9.44235 9.01943 11.125 9.01943C12.8076 9.01943 14.1758 7.65132 14.1758 5.96867C14.1758 4.28603 12.8076 2.91791 11.125 2.91791Z"
                fill="#060707"
              />
            </svg>
          </button>
          <button>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.041 5.28718H15.8779C15.5672 2.87188 13.4984 1 11 1C8.5016 1 6.43409 2.87188 6.12211 5.28718H1.95896C1.42961 5.28718 1 5.71679 1 6.24613V20.041C1 20.5704 1.42961 21 1.95896 21H20.041C20.5704 21 21 20.5704 21 20.041V6.24613C21 5.71679 20.5704 5.28718 20.041 5.28718ZM11 2.91791C12.4384 2.91791 13.6429 3.93441 13.9344 5.28718H8.06559C8.35712 3.93441 9.56157 2.91791 11 2.91791ZM19.0821 19.0821H2.91791V7.20509H6.07991V9.48357C6.07991 10.0129 6.50953 10.4425 7.03887 10.4425C7.56821 10.4425 7.99783 10.0129 7.99783 9.48357V7.20509H14.0022V9.40813C14.0022 9.93748 14.4318 10.3671 14.9611 10.3671C15.4905 10.3671 15.9201 9.93748 15.9201 9.40813V7.20509H19.0821V19.0821Z"
                fill="#060707"
              />
            </svg>
          </button>
        </li>
      </nav>
      <SideDrawer />
    </header>
  );
}
