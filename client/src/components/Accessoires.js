import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';
import Welcome from './Welcome';

function Accessoires({ ping, setping }) {
  const products = useSelector((state) => state.product.productList);
  console.log(products)
  return (
    <div className="Welcome">
      <Welcome />
      <div className='hero'>

        <div style={{ display: "flex", width: "100%", justifyContent: "space-around", flexWrap: "wrap" }}>
          {
            products?.map((el) => <ProductCard product={el} ping={ping} setping={setping} />)
          }
        </div>

      </div>
    </div>
  )
}

export default Accessoires