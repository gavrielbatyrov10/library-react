import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;

    image.onload = () => {
      setImg(image);
      setLoading(false);
    };
  }, [book.url]);

  const imgLoaded = () => {
    // handle any logic you need when the image is loaded
  };

  return (
    <div className="book">
      {loading ? (
        <div className="book__img--skeleton">
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </div>
      ) : (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={img.src}
                alt=""
                className="book__img"
                onLoad={imgLoaded}
              />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      )}
    </div>
  );
};

export default Book;
