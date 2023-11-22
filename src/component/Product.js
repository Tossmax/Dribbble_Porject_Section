import React from 'react';
import { useState } from 'react';
import { FaHeart, FaFileArchive, FaEye } from 'react-icons/fa';

export const Product = ({ product, increaseLikes, increaseView }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  let numLikes;
  if (Math.abs(product.like) > 999) {
    numLikes =
      Math.sign(product.like) * (Math.abs(product.like) / 1000).toFixed(1) +
      'k';
  } else {
    numLikes = Math.sign(product.like) * Math.abs(product.like);
  }

  let numRev;
  if (Math.abs(product.view) > 999) {
    numRev =
      Math.sign(product.view) * (Math.abs(product.view) / 1000).toFixed(1) +
      'k';
  } else {
    numRev = Math.sign(product.view) * Math.abs(product.view);
  }

  return (
    <div
      className="normal"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onDoubleClick={increaseView}
    >
      <img src={product.image} alt="hi" className="productImage" />

      {isHovering && (
        <div className="hovertext">
          <p>{product.decr}</p>
          <div className="iconss">
            <FaHeart onClick={increaseLikes} className="ic" />
            <FaFileArchive className="ic" />
          </div>
        </div>
      )}
      <div className="profile">
        <img src={product.profiile} alt="hello" className="profileImage" />
        <p className="name">{product.name}</p>
        {product.Pro ? <p className="Pro">PRO</p> : ''}
        <div className="lik">
          <p>
            <FaHeart className="viw" />
            {numLikes}
          </p>
          <p>
            <FaEye className="view" />
            {numRev}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
