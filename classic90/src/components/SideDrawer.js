import styles from "./sidedrawer.module.css";

export default function SideDrawer() {
  return (
    <>
      <aside className={styles.drawer}>
        <div className={styles.drawer_header}>
          <h4>Your Cart</h4>
          <button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2.25505L13.745 0L8 5.74495L2.25505 0L0 2.25505L5.74495 8L0 13.745L2.25505 16L8 10.2529L13.745 16L16 13.745L10.2529 8L16 2.25505Z"
                fill="#060707"
              />
            </svg>
          </button>
        </div>
        <div className={styles.drawer_body}>
          <ul></ul>
          <form className={styles.drawer_coupon_form}>
            <input type="text" />
            <button className="btn type1">Apply</button>
          </form>
        </div>
        <div className={styles.drawer_price_section}>
          <ul>
            <li>
              <h6>Discount</h6>
              <p>$0</p>
            </li>
            <li>
              <h6>Subtotal</h6>
              <p>$140.00</p>
            </li>
          </ul>
        </div>
        <div className={styles.drawer_footer}>
          <button className="btn type2">Continue Shopping</button>
          <button className="btn type1">Checkout</button>
        </div>
      </aside>
      <div className={styles.overlays}></div>
    </>
  );
}
