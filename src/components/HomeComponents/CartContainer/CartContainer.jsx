//Styles
import styles from "./CartContainer.module.css";

//Hooks
import { useContext, useEffect, useState } from "react";

//Context
import AppContext from "../../../context/appContext";

//Icons
import { FiArrowLeft } from "react-icons/fi";

//Components
import CartProduct from "../CartProduct/CartProduct";

const CartContainer = () => {
  const { cartAppearence, setCartAppearence } = useContext(AppContext);

  const { cartList, setCartList } = useContext(AppContext);

  const changeCartAppearence = () => {
    if (cartAppearence === true) {
      setCartAppearence(false);
    } else {
      setCartAppearence(true);
    }
  };

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_container_header}>
        <FiArrowLeft
          className={styles.leave_button}
          onClick={changeCartAppearence}
        />
        <h1>Carrinho</h1>
      </div>
      <div className={styles.cart_container_body}>
        {cartList.map((product, index) => (
          <CartProduct key={index} data={cartList[index]} />
        ))}
        {cartList.filter(() => {})}
      </div>
    </div>
  );
};

export default CartContainer;
