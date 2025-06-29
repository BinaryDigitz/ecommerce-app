import React, { useContext, useEffect, useState } from 'react'
import { ProductCart, ShopContext, Title } from './exportComp'

function BestSeller() {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter(product => product.bestseller)
        setBestSeller(bestProduct.slice(0, 5))
    }, [products])
    
    
    return (
        <div className='my-10'>
            <article className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio corporis necessitatibus nobis. Possimus molestias deserunt eaque quod .
                </p>
            </article>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((product, index) => (
                        <ProductCart key={index} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
