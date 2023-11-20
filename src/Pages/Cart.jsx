
// import React, { useState, useEffect } from "react";
// import EmptyCart from "../components/assets/empty_cart.svg";
// import { Link } from "react-router-dom";

// function App() {
//   const [isPurchased, setPurchased] = useState(false);

//   const handleBuyClick = () => {
//     // Simulating a loading delay for checkout
//     setPurchased(true);
//     setTimeout(() => {
//       setPurchased(false);
//     }, 2000); // Adjust the delay time as needed
//   };

//   return (
//     <div>
//       <p>{isPurchased ? 'Item purchased!' : 'Item not purchased yet.'}</p>
//       <button onClick={handleBuyClick} disabled={isPurchased}>
//         {isPurchased ? 'Already Purchased' : 'Buy Now'}
//       </button>
//     </div>
//   );
// }

// function Cart({ cart, setCart, updateNumberOfItems }) {
//   const taxRate = 0.1;

//   const [quantities, setQuantities] = useState(
//     cart.reduce((quantityMap, book) => {
//       quantityMap[book.id] = 1;
//       return quantityMap;
//     }, {})
//   );

//   const calculateSubtotal = () => {
//     return cart.reduce(
//       (total, book) =>
//         total +
//         (book.salePrice !== null ? book.salePrice : book.originalPrice) *
//           quantities[book.id],
//       0
//     );
//   };

//   const calculateTax = (subtotal) => {
//     return subtotal * taxRate;
//   };

//   const calculateTotal = (subtotal, tax) => {
//     return subtotal + tax;
//   };

//   const handleQuantityChange = (bookId, newQuantity) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [bookId]: newQuantity,
//     }));

//     updateNumberOfItems(); // Update numberOfItems in the parent component
//   };

//   const removeItem = (bookId) => {
//     const updatedCart = cart.filter((book) => book.id !== bookId);
//     setCart(updatedCart);

//     setQuantities((prevQuantities) => {
//       const updatedQuantities = { ...prevQuantities };
//       delete updatedQuantities[bookId];
//       return updatedQuantities;
//     });

//     updateNumberOfItems(); // Update numberOfItems in the parent component
//   };

//   const subtotal = calculateSubtotal();
//   const tax = calculateTax(subtotal);
//   const total = calculateTotal(subtotal, tax);

//   const [isPurchased, setPurchased] = useState(false);
//   const [isLoading, setLoading] = useState(false);

//   const handleBuyClick = () => {
//     // Simulating a loading delay for checkout
//     setLoading(true);
//     setTimeout(() => {
//       setPurchased(true);
//       setLoading(false);
//     }, 2000); // Adjust the delay time as needed
//   };

//   useEffect(() => {
//     // Reset purchase state when cart changes
//     setPurchased(false);
//   }, [cart]);

//   return (
//     <div id="books__body">
//       <div id="books__main">
//         <div className="books__container">
//           <div className="row">
//             <div className="cart">
//               <div className="cart__header">
//                 <span className="cart__book">Book</span>
//                 <span className="cart__quantity">Quantity</span>
//                 <span className="cart__total">Price</span>
//               </div>
//               <div className="cart__body">
//                 {cart &&
//                   cart.map((book) => {
//                     const salePrice = book.salePrice;
//                     const originalPrice = book.originalPrice;
//                     const priceToShow =
//                       salePrice !== null && salePrice !== undefined
//                         ? salePrice.toFixed(2)
//                         : originalPrice !== null && originalPrice !== undefined
//                         ? originalPrice.toFixed(2)
//                         : "0.00";

//                     return (
//                       <div className="cart__item" key={book.id}>
//                         <div className="cart__book">
//                           <img
//                             src={book.url}
//                             className="cart__book--img"
//                             alt=""
//                           />
//                           <div className="cart__book--info">
//                             <span className="cart__book--title">
//                               {book.title}
//                             </span>
//                             <span className="cart__book--price">
//                               ${priceToShow}
//                             </span>
//                             <button
//                               className="cart__book--remove"
//                               onClick={() => removeItem(book.id)}
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                         <div className="cart__quantity">
//                           <input
//                             type="number"
//                             min={0}
//                             max={99}
//                             value={quantities[book.id]}
//                             onChange={(e) =>
//                               handleQuantityChange(
//                                 book.id,
//                                 parseInt(e.target.value, 10)
//                               )
//                             }
//                             className="cart__input"
//                           />
//                         </div>
//                         <div className="cart__total">
//                           ${(priceToShow * quantities[book.id]).toFixed(2)}
//                         </div>
//                       </div>
//                     );
//                   })}
//               </div>
//               {cart.length === 0 && (
//                 <div className="cart__empty">
//                   <img src={EmptyCart} className="cart__empty--img" alt="" />
//                   <h2>You don't have any books in your cart!</h2>
//                   <Link to="/books">
//                     <button className="btn">Browse books</button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//             {cart.length > 0 && (
//               <div className="cart__summary">
//                 <div className="total">
//                   <div className="total__item">
//                     <span>Subtotal</span>
//                     <span>${subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="total__item">
//                     <span>Tax {(taxRate * 100).toFixed()}</span>
//                     <span>${tax.toFixed(2)}</span>
//                   </div>
//                   <div className="total__item total__sub-total">
//                     <span>Total</span>
//                     <span>${total.toFixed(2)}</span>
//                   </div>
//                 </div>
//                 <div className="cart__empty">
//                   {/* Your empty cart content goes here */}
//                 </div>
//                 <button
//                   className="btn__checkout btn "
//                   onClick={handleBuyClick}
//                   disabled={isLoading}
//                 >
//                   {isLoading
//                     ? "Loading..."
//                     : isPurchased
//                     ? "Thanks for your order!"
//                     : "Checkout"}
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;




import React, { useState, useEffect } from "react";
import EmptyCart from "../components/assets/empty_cart.svg";
import { Link } from "react-router-dom";

function App() {
  const [isPurchased, setPurchased] = useState(false);

  const handleBuyClick = () => {
    // Simulating a loading delay for checkout
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
    }, 2000); // Adjust the delay time as needed
  };

  return (
    <div>
      <p>{isPurchased ? 'Item purchased!' : 'Item not purchased yet.'}</p>
      <button onClick={handleBuyClick} disabled={isPurchased}>
        {isPurchased ? 'Already Purchased' : 'Buy Now'}
      </button>
    </div>
  );
}

function Cart({ cart, setCart, updateNumberOfItems }) {
  const taxRate = 0.1;

  const [quantities, setQuantities] = useState(
    cart.reduce((quantityMap, book) => {
      quantityMap[book.id] = 1;
      return quantityMap;
    }, {})
  );

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, book) =>
        total +
        (book.salePrice !== null ? book.salePrice : book.originalPrice) *
          quantities[book.id],
      0
    );
  };

  const calculateTax = (subtotal) => {
    return subtotal * taxRate;
  };

  const calculateTotal = (subtotal, tax) => {
    return subtotal + tax;
  };

  const handleQuantityChange = (bookId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [bookId]: newQuantity,
    }));

    updateNumberOfItems(); // Update numberOfItems in the parent component
  };

  const removeItem = (bookId) => {
    const updatedCart = cart.filter((book) => book.id !== bookId);
    setCart(updatedCart);

    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[bookId];
      return updatedQuantities;
    });

    updateNumberOfItems(); // Update numberOfItems in the parent component
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  const [isPurchased, setPurchased] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleBuyClick = () => {
    // Simulating a loading delay for checkout
    setLoading(true);
    setTimeout(() => {
      setPurchased(true);
      setLoading(false);
    }, 2000); // Adjust the delay time as needed
  };

  useEffect(() => {
    // Reset purchase state when cart changes
    setPurchased(false);
  }, [cart]);

  return (
    <div id="books__body">
      <div id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart &&
                  cart.map((book) => {
                    const salePrice = book.salePrice;
                    const originalPrice = book.originalPrice;
                    const priceToShow =
                      salePrice !== null && salePrice !== undefined
                        ? salePrice.toFixed(2)
                        : originalPrice !== null && originalPrice !== undefined
                        ? originalPrice.toFixed(2)
                        : "0.00";

                    return (
                      <div className="cart__item" key={book.id}>
                        <div className="cart__book">
                          <img
                            src={book.url}
                            className="cart__book--img"
                            alt=""
                          />
                          <div className="cart__book--info">
                            <span className="cart__book--title">
                              {book.title}
                            </span>
                            <span className="cart__book--price">
                              ${priceToShow}
                            </span>
                            <button
                              className="cart__book--remove"
                              onClick={() => removeItem(book.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart__quantity">
                          <input
                            type="number"
                            min={0}
                            max={99}
                            value={quantities[book.id]}
                            onChange={(e) =>
                              handleQuantityChange(
                                book.id,
                                parseInt(e.target.value, 10)
                              )
                            }
                            className="cart__input"
                          />
                        </div>
                        <div className="cart__total">
                          ${(priceToShow * quantities[book.id]).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} className="cart__empty--img" alt="" />
                  <h2>You don't have any books in your cart!</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="cart__summary">
                <div className="total">
                  <div className="total__item">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="total__item">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="total__item total__sub-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="cart__empty">
                  {/* Your empty cart content goes here */}
                </div>
                <button
                  className="btn__checkout btn "
                  onClick={handleBuyClick}
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Loading..."
                    : isPurchased
                    ? "Thanks for your order!"
                    : "Checkout"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
