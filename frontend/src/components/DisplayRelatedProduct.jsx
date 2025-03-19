import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './exportComp'

function DisplayRelatedProduct({ category, subcategory }) {
   const { products } = useContext(ShopContext);
   const [ relatedProduct, setRelatedProduct ] = useState([]);

   useEffect(() =>{
if (products.length > 0) {
    let productCopy = products.slice();
    productCopy = productCopy.filter(item => category === item.category)
    productCopy = productCopy.filter(item =>subcategory === item.subCategory)

    console.log(productCopy.slice(0, 5));
    
}
   },[products])
  return (
    <div className='my-24 '>
      <div className='text-center text'>

      </div>
    </div>
  )
}

export default DisplayRelatedProduct
