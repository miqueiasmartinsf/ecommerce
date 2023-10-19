import Search from "../Search/Search.jsx";
import "./Card.css";
import formatCurrency from "../../../utils/formatCurrency.js";

//icons
import { BsCart2 } from "react-icons/bs";

//Hooks
import { useContext } from "react";

//Context
import Provider from "../../../context/Provider.jsx";
import AppContext from "../../../context/appContext.js";

//Router Link

import { Link } from "react-router-dom";

const Card = (props) => {
  const { data } = props;
  const { cartList, setCartList } = useContext(AppContext);
  const { productQuantity, setProductQuantity } = useContext(AppContext);
  const addToCart = () => {
    //verifying same products
    for (let i = 0; i < cartList.length; i++) {
      if (data == cartList[i]) {
        setProductQuantity(productQuantity + 1);
        console.log(productQuantity);
      } else {
        setProductQuantity;
      }
    }
    setCartList([...cartList, data]);
  };

  return (
    <div className="card-container">
      <div className="card-container-img">
        <div className="add-to-cart" onClick={addToCart}>
          <BsCart2 />
        </div>
        <img src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
      </div>
      <div className="card-description">
        <h2 className="card-price">{formatCurrency(data.price, "BRL")}</h2>
        <Link to={`product/${data.id}`}>
          <h2 className="card-title">{data.title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Card;
