import React, { useState } from 'react'
import ShopContext from './ShopContext'
import { products } from '../assets/assets'

function ShopProvider({ children }) {
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const currency = '$';
    const delivery_fee = 10;

    const values = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }
    return (
        <ShopContext.Provider value={values}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider
