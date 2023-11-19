
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";



function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route
          path="/books/:id"
          element={<BookInfo books={books} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} updateNumberOfItems={numberOfItems} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
