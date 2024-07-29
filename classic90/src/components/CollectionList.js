import Link from "next/link";
import styles from "./collection.module.css";

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
        <li>
          <Link href="/">
            <h4></h4>
          </Link>
        </li>
      </ul>
      <div className=""></div>
    </div>
  );
}
