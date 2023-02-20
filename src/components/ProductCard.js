import { useState } from 'react';

function ProductCard(props) {
  const handleAddToCartClick = () => {
    // TODO: Implement add to cart functionality
    console.log(`Added ${props.product.name} to cart.`);
  };

  return (
    <div className="card product-card">
      <img src={props.product.image} className="card-img-top img-fluid" alt={props.product.name} />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">{props.product.description}</p>
        <p className="card-text">{props.product.price}</p>
        <button className="btn btn-primary add-to-cart" onClick={handleAddToCartClick}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
