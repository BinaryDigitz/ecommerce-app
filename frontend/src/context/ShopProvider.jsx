import React from 'react'
import  ShopContext  from './ShopContext'
import { products } from '../assets/assets'

function ShopProvider({ children }) {
    
    const currency = '$';
    const delivery_fee = 10;

    const values = {
        products,
        currency,
        delivery_fee
    }
    return (
        <ShopContext.Provider value={values}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider
