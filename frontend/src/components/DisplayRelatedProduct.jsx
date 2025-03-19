import React, { useContext, useEffect, useState } from 'react'
import { ProductCart, ShopContext, Title } from './exportComp'

function DisplayRelatedProduct({ category, subcategory }) {
   const { products } = useContext(ShopContext);
   const [ relatedProduct, setRelatedProduct ] = useState([]);

   useEffect(() =>{
if (products.length > 0) {
    let productCopy = products.slice();
    productCopy = productCopy.filter(item => category === item.category)
    productCopy = productCopy.filter(item =>subcategory === item.subCategory)
    setRelatedProduct(productCopy.slice(0, 5))

    
}
   },[products])
  return (
    <div className='my-24 '>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
{
relatedProduct.map((item, index) => (
    
    <ProductCart key={index} product={item} />
))
}
      </div>
    </div>
  )
}

export default DisplayRelatedProduct
