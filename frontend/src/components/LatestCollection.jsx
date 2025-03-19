import React, { useContext, useEffect, useState } from 'react'
import { ProductCart, ShopContext, Title } from './exportComp'

function LatestCollection() {
    const [latestProducts, setLatestProducts] = useState([])

    const { products } = useContext(ShopContext)

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [])
    return (
        <div className='my-10'>
            <div className="text-center py-8 text-3xl">
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dfgdfg  dftgddgdd dgddgdgd ddf dfgd dgdddignissimos!
                    eveniet!</p>
            </div>
            {/* RENDERING PRODUCS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    latestProducts.map((product, index) => ( 
                        < ProductCart key={ index} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection
