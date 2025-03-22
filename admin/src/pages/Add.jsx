import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import AdminContext from "../context/AdminContext";
import { toast } from "react-toastify";

function Add() {
const { backendUrl, token} =  useContext(AdminContext);
const [ isLoading, setIsLoading ] = useState(false)
const [ error, setError ] = useState('')
  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });


  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    price: "",
    sizes: [],
    bestseller: false,
  });
  // console.log(images);
 async function handleFormSubmit(event){
  event.preventDefault()
  setIsLoading(true)
  setError('');

 const formData = new FormData()
 formData.append("name", product.name)
 formData.append('description', product.description)
 formData.append('price', product.price)
 formData.append('category', product.category)
 formData.append('subCategory', product.subCategory)
 formData.append('bestseller', product.bestseller)
 formData.append('sizes',JSON.stringify(product.sizes))

//  append images
images.image1 && formData.append('image1', images.image1)
images.image2 && formData.append('image2', images.image2)
images.image3 && formData.append('image3', images.image3)
images.image4 && formData.append('image4', images.image4)
   
   
const { data } = await axios.post(backendUrl + '/api/products/add', formData,  {headers:{ token}})

const { success, message } = data
 if(!success){
  toast.error(message)
  setError(message)
 }
 if(success){
  toast.success(message)
 }

   setIsLoading(false)

  
 }
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col w-full items-start gap-3 p-10">
      <div className="">
        <p className="mb-2">Upload Images</p>
        <div className="flex gap-3">
          <label htmlFor="image1">
            <img className="w-20" src={images.image1 ? URL.createObjectURL(images.image1 ): assets.upload_area} alt="" />
            <input type="file"
             onChange={e => setImages({...images, image1: e.target.files[0]})} id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={images.image2 ? URL.createObjectURL(images.image2 ): assets.upload_area} alt="" />
            <input type="file"
            onChange={e => setImages({...images, image2: e.target.files[0]})}
             id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={images.image3 ? URL.createObjectURL(images.image3 ): assets.upload_area} alt="" />
            <input type="file" 
            onChange={e => setImages({...images, image3: e.target.files[0]})}                                                                                                                                                                                                                                               
            id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={images.image4 ? URL.createObjectURL(images.image4 ): assets.upload_area} alt="" />
            <input type="file"
            onChange={e => setImages({...images, image4: e.target.files[0]})}   id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Product name"
          required
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Product details"
          cols={50}
          role="15"
          required
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        ></textarea>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8 items-center">
        <div>
          <p className="mb-2">Category</p>
          <select
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className="w-full px-3 py-2 max-w-[500px]"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub category</p>
          <select
            className="w-full px-3 py-2 max-w-[500px]"
            value={product.subCategory}
            onChange={(e) =>
              setProduct({ ...product, subCategory: e.target.value })
            }
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Price</p>
          <input
            className="w-full sm:w-[120px] px-3 py-2"
            type="number"
            placeholder="23.00"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product sizes</p>
        <div className="flex gap-3">
          <div onClick={() => setProduct({...product, sizes:product.sizes.includes('S') ? product.sizes.filter(item => item !== 'S') : [...product.sizes, 'S']})}>
            <p className={`${product.sizes.includes('S') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={() => setProduct({...product, sizes:product.sizes.includes('M') ? product.sizes.filter(item => item !== 'M') : [...product.sizes, 'M'] })}>
            <p className={`${product.sizes.includes('M') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={() => setProduct({...product, sizes:product.sizes.includes('L') ? product.sizes.filter(item => item !== 'L') : [...product.sizes, 'L'] })}>
            <p className={`${product.sizes.includes('L') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={() => setProduct({...product, sizes:product.sizes.includes('XL') ? product.sizes.filter(item => item !== 'XL') : [...product.sizes, 'XL'] })}>
            <p className={`${product.sizes.includes('XL') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={() => setProduct({...product, sizes:product.sizes.includes('XXL') ? product.sizes.filter(item => item !== 'XXL') : [...product.sizes, 'XXL'] })}>
            <p className={`${product.sizes.includes('XXL') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={product.bestseller}
          onChange={() => setProduct({ ...product, bestseller: !product.bestseller })}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Bestseller
        </label>
      </div>
      <button className="w-28 cursor-pointer hover:opacity-75 py-3 mt-4 bg-black text-white">
        { isLoading ? 'Submiting....' : 'SUBMIT'}
      </button>
      <p className="text-red-500 text-sm text-center -mt-4">{error}</p>
    </form>
  );
}

export default Add;
