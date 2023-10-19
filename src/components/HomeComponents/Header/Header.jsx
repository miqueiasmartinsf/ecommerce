import Search from "../Search/Search.jsx";
import "./Header.css";
import { BsCart2 } from "react-icons/bs";

//Hooks

import { useContext } from "react";

//Context

import AppContext from "../../../context/appContext";

const Header = () => {
  const { setCartAppearence, cartAppearence } = useContext(AppContext);

  const changeCartAppearence = () => {
    if (cartAppearence === true) {
      setCartAppearence(false);
    } else {
      setCartAppearence(true);
    }
  };

  return (
    <div className="header">
      <nav>
        <Search />
        <div className="cart-container" onClick={changeCartAppearence}>
          <BsCart2 />
        </div>
      </nav>
    </div>
  );
};

export default Header;
