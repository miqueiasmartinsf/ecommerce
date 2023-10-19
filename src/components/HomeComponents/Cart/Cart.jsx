import CartContainer from "../CartContainer/CartContainer";

//Hooks
import { useContext } from "react";

//Context

import AppContext from "../../../context/appContext";

const Cart = () => {
  const { cartAppearence } = useContext(AppContext);

  return <>{cartAppearence && <CartContainer />}</>;
};

export default Cart;
