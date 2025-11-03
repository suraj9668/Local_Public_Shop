import React, { useState,useEffect } from "react";
import axios from "axios";
import { ImagePlus } from "lucide-react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    stock: "",
    discount: "",
    description: "",
    productImage: null,
  });

  const [shopId, setShopId] = useState(null);
  
    useEffect(() => {
      const shopId = localStorage.getItem('shopId'); // yahan sidha string milega
      if (shopId) {
        setShopId(shopId);
      }
    }, []);

  const [preview, setPreview] = useState(null);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle image preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: file });
    setPreview(URL.createObjectURL(file));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();



    try{

      const res = await axios.post(`http://localhost:3000/api/shop/create_product/${shopId}`,formData)

      if(res.status == 200){
        alert("Product Added Successfully")

        const dashRes = await axios.get(`http://localhost:3000/api/users/dashboard`)

        navigate("/shop_dashboard")
      }else{
        alert("Product Not Added")
      }
        
    }catch(e){
      console.log(e)
    }
    console.log("Product Data:", formData);
    // Yahan backend API call kar sakte ho e.g. axios.post("/api/shop/addProduct", formData)
  };

  return (
    <>
      {/* Background Gradient */}
      <div className="bg-gradient-to-br from-white fixed w-full h-screen -z-10 to-gray-500"></div>

      {/* Form Layout */}
      <div className="p-[5vw] grid grid-cols-12 h-auto z-10 mx-auto place-items-center">
        <div className="md:col-span-3"></div>

        {/* Main Form */}
        <form
          onSubmit={handleSubmit}
          className="col-span-12 md:col-span-6 border w-full h-auto p-[5vw] bg-gradient-to-tl from-gray-300 rounded-4xl border-blue-800"
        >
          <h1 className="text-center font-bold text-3xl mb-3 text-blue-700">
            Add New Product
          </h1>

          {/* Product Name */}
          <div className="mt-3">
            <label className="text-gray-600">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Enter Product Name"
              className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-blue-700"
            />
          </div>

          {/* Category */}
          <div className="mt-3">
            <label className="text-gray-600">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter Product Category"
              className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-blue-700"
            />
          </div>

          {/* Price and Stock */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div>
              <label className="text-gray-600">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter Price"
                className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-blue-700"
              />
            </div>
            <div>
              <label className="text-gray-600">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Available Quantity"
                className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-blue-700"
              />
            </div>
          </div>

          {/* Discount */}
          <div className="mt-3">
            <label className="text-gray-600">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              placeholder="Enter Discount if any"
              className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-blue-700"
            />
          </div>

          {/* Description */}
          <div className="mt-3">
            <label className="text-gray-600">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write short description"
              rows="3"
              className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-blue-700 resize-none"
            ></textarea>
          </div>

          {/* Product Image Upload */}
          <div className="flex items-center mt-3 gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImagePlus className="text-gray-400 w-8 h-8" />
              )}
            </div>
            <div>
              <p className="text-sm text-gray-600">Product Image</p>
              <label
                htmlFor="fileInput"
                className="text-blue-500 hover:underline cursor-pointer font-medium"
              >
                Upload a file
              </label>
              <input
                id="fileInput"
                type="file"
                name="productImage"
                className="hidden"
                onChange={handleImage}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-800 w-full text-white mt-5 px-5 py-2 rounded-xl hover:bg-blue-700 transition-all duration-200"
          >
            Add Product
          </button>
        </form>

        <div className="md:col-span-3"></div>
      </div>
    </>
  );
};

export default AddProduct;
