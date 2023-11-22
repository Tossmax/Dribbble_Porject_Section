import '../index.css';
import Product from '../component/Product';
import { useState } from 'react';
import data from '../component/data';

export default function Home() {
  const [products, setProducts] = useState(data);

  const increaseLikes = (id) => {
    setProducts((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, like: item.like + 1 } : item
      )
    );
  };

  const increaseView = (id) => {
    setProducts((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, view: item.view + 1 } : item
      )
    );
  };
  return (
    <div className="work">
      <>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            increaseLikes={() => increaseLikes(product.id)}
            increaseView={() => increaseView(product.id)}
          />
        ))}
      </>
    </div>
  );
}
