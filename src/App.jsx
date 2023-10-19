import { useCallback, useContext, useState } from "react";
import "./App.css";

//Context
import Provider from "./context/Provider";

//Components
import Header from "./components/HomeComponents/Header/Header";
import Showcase from "./components/HomeComponents/Showcase/Showcase.jsx";
import Cart from "./components/HomeComponents/Cart/Cart";
import AppContext from "./context/appContext";

//Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product/:id" Component={Product} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
