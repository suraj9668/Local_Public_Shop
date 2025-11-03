import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddProductss = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    productImage: "",
    category: "",
    price: "",
    stock: "",
    discount: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Form Validation Function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName.trim()) newErrors.productName = "Product name is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.price || formData.price <= 0) newErrors.price = "Valid price required";
    if (!formData.stock || formData.stock < 0) newErrors.stock = "Valid stock required";
    if (formData.discount < 0) newErrors.discount = "Discount cannot be negative";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Product Data:", formData);
    alert("✅ Product Added Successfully!");
    navigate("/dashboard"); // redirect after save
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Back Button */}
      {/* <header className="bg-white shadow-sm px-8 py-4 flex items-center gap-4 border-b border-gray-200">
        
        <h2 className="text-2xl font-semibold text-blue-900">Add New Product</h2>
      </header> */}

      {/* Form Section */}
      <section className="flex-1 flex justify-center items-start p-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-800 hover:text-orange-500 fixed left-3 transition"
        >
          <FaArrowLeft /> <span className="font-medium">Back</span>
        </button>
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-orange-100 via-white to-blue-100 w-full max-w-2xl  rounded-2xl shadow-md p-8 space-y-6 border border-gray-100"
        >
          {/* Product Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter product name"
            />
            {errors.productName && <p className="text-red-600 text-sm mt-1">{errors.productName}</p>}
          </div>

          {/* Product Image URL */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Product Image URL</label>
            <input
              type="text"
              name="productImage"
              value={formData.productImage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Paste image URL"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter category"
            />
            {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
          </div>

          {/* Price / Stock / Discount */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.price && <p className="text-red-600 text-sm mt-1">{errors.price}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.stock && <p className="text-red-600 text-sm mt-1">{errors.stock}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Discount (%)</label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.discount && <p className="text-red-600 text-sm mt-1">{errors.discount}</p>}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Write short product details..."
            ></textarea>
            {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-800 to-orange-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all"
            >
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProductss;
