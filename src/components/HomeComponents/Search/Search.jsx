import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";

import { useState, useContext, useEffect } from "react";

import AppContext from "../../../context/appContext";
import fetchProducts from "../../../../api/fetchProducts";

const Search = () => {
  const { setProducts } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    setProducts(products);

    setSearchValue("");
  };

  /*
    const searchProduct = async() => {
        const response = await fetchProducts('iphone');
        console.log(response);
        setData(response);
    }
    */

  return (
    <form action="" className="search-container" onSubmit={handleSearch}>
      <input
        type="text"
        name=""
        id=""
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <button>
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
