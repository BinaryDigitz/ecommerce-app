import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import DisplayRelatedProduct from "../components/DisplayRelatedProduct";

function Product() {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchProductData() {
    products.map((item) => {
      if (item._id === id) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  }
  useEffect(() => {
    fetchProductData();
  }, [id]);

  const disableButton = size.length === 0;
  function handleAddToCart(id, size) {
    if (disableButton) {
      setErrorMessage("Please select size.");
      toast.error("Please select size.");
    } else {
      setErrorMessage("");
      addToCart(id, size);
      toast.success("Added to cart successfully.");
    }
  }
  return productData ? (
    <section className="border-t-2 pt-10  transition-opacity ease-in duration-500 opacity-100">
      {/* ...........product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24px] sm:w-full sm:mb-3 flex-shrink-0"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* ..........PRODUCT INFORMATION */}
        <div className="flex-1">
          <h className="font-medium text-2xl mt-2">{productData.name}</h>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_dull_icon} className="w-3" alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border cursor-pointer py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="h-1">
              {errorMessage.length > 0 && (
                <p className="text-sm pl-3 text-red-500">{errorMessage}</p>
              )}
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(productData._id, size)}
            className="bg-black hover:opacity-90 cursor-pointer text-white px-8 py-3 active:bg-gray-700 trans"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy withing 7 days.</p>
          </div>
        </div>
      </div>
      {/*  ........Description and Review section*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 cursor-pointer text-sm">Description</b>
          <p className="border px-5 py-3 cursor-pointer text-sm">
            Reviews(122)
          </p>
        </div>
        <div className="flex flex-col gap-e border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo
            incidunt quaerat hic ad qisci enim laudantium corporis at ea illum
            commodi nihillaudantium.
          </p>
          <p>
            E-commerce website typically display products or services along with
            detailed description, accompanied with eye catching photos
          </p>
        </div>
      </div>
      {/* ..............Display related products */}
      <DisplayRelatedProduct
        category={productData.category}
        subcategory={productData.subCategory}
      />
    </section>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
