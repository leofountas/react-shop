import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Banner>
        <img src={logo} alt="la maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
      <Footer />
    </>
  );
}
