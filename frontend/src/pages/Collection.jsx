import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductCart from '../components/ProductCart';

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevant')

  function toggleCategory(e) {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  };
  function toggleSubcategory(e) {
    if (subcategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubcategory(prev => [...prev, e.target.value])
    }
  };
  function applyFilter() {
    let productCopy = products.slice()
    if( showSearch && search ){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }
    if (subcategory.length > 0) {
      productCopy = productCopy.filter(item => subcategory.includes(item.subCategory));

    }
    setFilterProduct(productCopy)
  };

  function sortProduct() {
    let filterCopy = filterProduct.slice()
    switch (sortType) {
      case 'low-high':
        setFilterProduct(filterCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProduct(filterCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter()
        break;
    }

  };
  useEffect(() => {
    sortProduct()
  }, [sortType]);
  
  useEffect(() => {
    setFilterProduct(products)
  }, []);

  useEffect(() => {
    applyFilter()
  }, [category, subcategory, search, showSearch])

  return (
    <section className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* FILTER OPTIONS */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 flex text-xl items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''} trans`} alt="" />
        </p>
        {/* CATEGORY FILTER */}
        <div className={`border border-color-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Men'} /> Men
            </p>
            <p className="flex gap-2">
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Women'} /> Women
            </p>
            <p className="flex gap-2">
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Kids'} /> Kids
            </p>
          </div>
        </div>
        {/*  SUBCATEGORY FILTER*/}
        <div className={`border border-color-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleSubcategory} className='w-3' type="checkbox" value={'Topwear'} /> Top wear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubcategory} className='w-3' type="checkbox" value={'Bottomwear'} /> Bottom wear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubcategory} className='w-3' type="checkbox" value={'Winterwear'} /> Winter wear
            </p>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* PRODUCT SORT */}
          <select onChange={e => setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* MAP PRODUCT */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProduct.map((product, index) => (
              <ProductCart key={index} product={product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Collection
