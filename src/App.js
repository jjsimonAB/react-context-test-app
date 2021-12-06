import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from 'react'
import CartProvider from "./store/CartProvider";

function App() {

  const [cartOpen, setCartOpen] = useState(false);

  const ShowCartHandler = () => {
    setCartOpen(true);
  }

  const hideCartHandlder = () => {
    setCartOpen(false)
  }

  return (
    <CartProvider>
      {cartOpen && <Cart onHide={hideCartHandlder}/>}
      <Header onOpenCart={ShowCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
