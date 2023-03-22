import React from 'react'
import ProductCard from '../ProductCard'

function Command({commandes,ping,setping}) {
  return (
    <>
          {commandes?.map((el, i) => <ProductCard product={el} ping={ping} setping={setping}/>)}
    </>
    
  )
}

export default Command