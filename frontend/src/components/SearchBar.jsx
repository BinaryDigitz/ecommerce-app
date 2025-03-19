import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './exportComp'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';

function SearchBar() {
   const location = useLocation()
   const [ visible, setVisible ] = useState(false)
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    useEffect(() =>{
        // setShowSearch(false)
        if(location.pathname.includes('collection') ){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location]);


return (showSearch && visible) && (
        <section className='pb-4 bg-gray-50 text-center'>
        <div className="inline-flex items-center rounded-full w-3/4 sm:w-1/2 px-5 py-2 mx-3 justify-around border border-gray-400">
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
            <img src={assets.search_icon} alt="" className='w-4' />
        </div>
        <img onClick={() => setShowSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />
    </section>
    )



}

export default SearchBar
