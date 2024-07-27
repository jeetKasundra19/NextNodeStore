import style from "./product.module.css";

export default function ProductBox() {
  return (
    <div className={style.product_box}>
      <div className={style.product_image}></div>
      <div>
        <ul></ul>
        <div>
            <h2>Denim Skirt</h2>
            <p>Blue</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
