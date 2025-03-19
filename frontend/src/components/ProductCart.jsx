import React, { useContext } from 'react'
import { ShopContext } from './exportComp'
import { Link } from 'react-router-dom'

function ProductCart(props) {
  const { _id, name, price, image } = props.product

  const { currency } = useContext(ShopContext)
  return (
    <Link to={`/product/${_id}`} className='text-gray-700 cursor-pointer'>
      <article >
        <div className='overflow-hidden'>
          <img src={image[0]} className='hover:scale-110 trans' alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='font-medium text-sm'>{currency}{price}</p>
      </article>
    </Link>
  )
}

export default ProductCart
