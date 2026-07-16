import { useContext } from "react";

import Product from "../../components_13-07-2026/E-Commerce Cart Application_16-07-2026/Product";
import Cart from "../../components_13-07-2026/E-Commerce Cart Application_16-07-2026/Cart";
import Checkout from "../../components_13-07-2026/E-Commerce Cart Application_16-07-2026/Checkout";
import ThemeButton1 from "../../components_13-07-2026/E-Commerce Cart Application_16-07-2026/ThemeButton1";

import { ThemeContext } from "../../components_13-07-2026/E-Commerce Cart Application_16-07-2026/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>

        <h1>E-Comerce Apllication</h1>
      <ThemeButton1 />
      <Product />
      <Cart />
      <Checkout />
    </div>
  );
}

export default App;