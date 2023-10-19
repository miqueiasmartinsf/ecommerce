import AppContext from "./appContext";
import { useState, useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartAppearence, setCartAppearence] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);
  const [cartList, setCartList] = useState([]);

  //Primeiros produtos
  useEffect(() => {
    const firstProducts = async () => {
      const products = await fetchProducts("Computador");
      setProducts(products);
    };

    firstProducts();
  }, []);

  const value = {
    products,
    setProducts,
    cartAppearence,
    setCartAppearence,
    cartList,
    setCartList,
    productQuantity,
    setProductQuantity,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
