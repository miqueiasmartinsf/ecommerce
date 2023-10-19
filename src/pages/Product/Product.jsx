import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import ProductContainer from "../../components/ProductComponents/ProductContainer/ProductContainer/ProductContainer";
import AppContext from "../../context/appContext";

const Product = () => {
  const { products } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const dataProduct = products.find((product) => product.id === id);
    setProduct(dataProduct);
    console.log(product);
  }, [products]);

  if (!product) return null;

  return (
    <div>
      <ProductContainer product={product} />
    </div>
  );
};

export default Product;
