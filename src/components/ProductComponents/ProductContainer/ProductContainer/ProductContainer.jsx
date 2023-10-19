import styles from "./ProductContainer.module.css";

//Hooks
import { useState } from "react";

//Icons
import { LiaShoppingBasketSolid } from "react-icons/lia";

const ProductContainer = ({ product }) => {
  const [productAmount, setProductAmount] = useState(0);

  function increaseAmount() {
    setProductAmount(() => productAmount + 1);
  }

  function decreaseAmount() {
    if (productAmount <= 0) {
      return;
    } else {
      setProductAmount(() => productAmount - 1);
    }
  }

  return (
    <div className={styles.product_container}>
      <div className={styles.product_img}>
        <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
      </div>
      <div className={styles.product_details}>
        <h1 className={styles.product_title}>{product.title}</h1>
        <p className={styles.product_price}>R${product.price}</p>
        <div className={styles.product_amount}>
          <p>quantidade:</p>
          <div className={styles.product_amount_input}>
            <button onClick={decreaseAmount}>-</button>
            <span>{productAmount}</span>
            <button onClick={increaseAmount}>+</button>
          </div>
        </div>
        <div className={styles.buy_item}>
          <button className={styles.buy_item_btn}>
            <span>
              <LiaShoppingBasketSolid />
            </span>
            <h1>comprar</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
