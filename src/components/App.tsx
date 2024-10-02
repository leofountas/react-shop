import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import "../styles/Layout.css";
import { useEffect, useState } from "react";
import { CartItem } from "../@types/cartPropsTypes";

export default function App() {
  const [cart, updateCart] = useState<CartItem[]>(() => {
    const localValue = localStorage.getItem("CART");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  });
  return (
    <>
      <Banner>
        <img src={logo} alt="la maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  );
}
