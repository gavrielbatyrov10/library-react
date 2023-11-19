
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/Ui/Rating";
import Price from "../components/Ui/Price";
import Book from "../components/Ui/Book";

const BookInfo = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id, 10));
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Reset isAdded when the book changes
    setIsAdded(false);
  }, [id]);

  function addBookToCart(book) {
    addToCart(book);
    setIsAdded(true);
  }

  function bookExistsOnCart() {
    return books.some((item) => item.id === parseInt(id, 10));
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                </div>
                <h3 className="book__summary--title">Summary</h3>
                <p className="book__summary--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi accusantium ipsa
                  tempora voluptates nulla modi asperiores laborum aspernatur. Itaque temporibus ex minus
                  nesciunt sit totam similique ad hic provident.
                </p>
                <p className="book__summary--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi accusantium ipsa
                  tempora voluptates nulla modi asperiores laborum aspernatur. Itaque temporibus ex minus
                  nesciunt sit totam similique ad hic provident.
                </p>
                {isAdded ? (
                  <Link to="/cart" className="btn">
                    Checkout
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;



