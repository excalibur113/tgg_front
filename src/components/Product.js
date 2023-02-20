import React from 'react';

const Product = (props) => {
  const { name, image, price } = props.product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={() => alert(`${name} added to cart`)}>Add to Cart</button>
    </div>
  );
};

export default Product;
