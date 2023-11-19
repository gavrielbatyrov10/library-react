
import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  const formattedOriginalPrice = originalPrice !== undefined ? `$${originalPrice.toFixed(2)}` : "N/A";

  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="__price--normal original-price">{formattedOriginalPrice}</span>
          <span className="sale-price">${salePrice.toFixed(2)}</span>
        </>
      ) : (
        formattedOriginalPrice
      )}
    </div>
  );
};

export default Price;
