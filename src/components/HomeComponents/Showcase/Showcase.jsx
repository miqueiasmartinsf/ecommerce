import { useState, useContext, useEffect } from "react";
import "./Showcase.css";
import fetchProducts from "../../../../api/fetchProducts";
import Card from "../Card/Card.jsx";
import Search from "../Search/Search.jsx";
import AppContext from "../../../context/appContext";

const Showcase = () => {
  const { products, setProducts } = useContext(AppContext);

  return (
    <div className="show-case">
      {products.map((product, index) => (
        <Card key={index} data={product} />
      ))}
    </div>
  );
};

export default Showcase;
