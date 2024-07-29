import Link from "next/link";
import styles from "./collection.module.css";
import Image from "next/image";
import collectionImage  from "#/collection-image.jpg";

const collectionList = [
  {
    id: 1,
    title: "Gelora Collection",
  },
  {
    id: 2,
    title: "GEMASH x Cupicupita",
  },
  {
    id: 3,
    title: "Selaras Collection",
  },
  {
    id: 4,
    title: "Camo Collection",
  },
];

export default function CollectionList() {
  return (
    <div className={styles.collection_container}>
      <ul className={styles.collection_list}>
        {collectionList &&
          collectionList.map((item) => (
            <li key={item.id}>
              <Link href="/">
                <h4>{item.title}</h4>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.64193 0.5V5.14696H16.0692L0 21.2162L3.28695 24.5L19.353 8.43391V22.8581H24V0.5H1.64193Z"
                    fill="#060707"
                  />
                </svg>
              </Link>
            </li>
          ))}
      </ul>
      <div className={styles.collection_image}>
          <Image src={collectionImage} alt="collection image" />
      </div>
    </div>
  );
}
