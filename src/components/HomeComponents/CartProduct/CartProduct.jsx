//Styles
import styles from "./CartProduct.module.css";

//Hooks
import { useEffect, useContext } from "react";
import { useState } from "react";

//Icons
import { BiCurrentLocation, BiTrash } from "react-icons/bi";
import AppContext from "../../../context/appContext";

const CartProduct = ({ data }) => {
  console.log(data);

  const { cartList, setCartList } = useContext(AppContext);

  const removeItem = (id) => {
    const filteredList = cartList.filter((item) => item.id != id);
    setCartList(filteredList);
  };

  return (
    <div className={styles.cart_product_container}>
      <div className={styles.product_img}>
        <img src={data.thumbnail} alt="" />
      </div>
      <div className={styles.product_details}>
        <p className={styles.product_name}>{data.title}</p>
        <span>R$ {data.price} </span>
      </div>
      <div className={styles.remove_item}>
        <button onClick={() => removeItem(data.id)}>
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
