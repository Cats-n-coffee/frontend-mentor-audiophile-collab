import React from "react";
import BottomBanner from "./components/sharedComponents/BottomBanner";
import CartModal from "./components/sharedComponents/cart/CartModal";
import CategoriesMenu from "./components/sharedComponents/CategoriesMenu";
import Footer from "./components/sharedComponents/Footer";
import "./scss/main.scss";

function App() {
  const [showCart, setShowCart] = React.useState(false);
  return (
    <div className="App">
      <h1 style={{ padding: "2em 0" }}>Audiophile app</h1>
      <button onClick={() => setShowCart(true)} style={{ marginBottom: "4em" }}>
        toggle cart modal
      </button>
      {showCart && <CartModal setShowCart={setShowCart} />}
      <main>
        <CategoriesMenu />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
