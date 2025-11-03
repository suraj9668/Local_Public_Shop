import { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlusCircle, FaTag } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Hammer",
      category: "Tools",
      price: 250,
      stock: 20,
      discount: 10,
      productImage: "https://cdn-icons-png.flaticon.com/512/2402/2402463.png",
    },
    {
      id: 2,
      productName: "Paint Brush",
      category: "Painting",
      price: 120,
      stock: 50,
      discount: 5,
      productImage: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const filteredProducts = products.filter((p) =>
    p.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (product) => {
    setEditId(product.id);
    setEditData(product);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updated = products.map((p) =>
      p.id === editId ? { ...p, ...editData } : p
    );
    setProducts(updated);
    setEditId(null);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-blue-100 p-8 rounded-3xl shadow-inner">
      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search product by name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 🧺 Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ➕ Add New Product Card (Always First) */}
        <div
          onClick={() => navigate( "/shop_dashboard/addproduct" )}
          className="flex flex-col items-center justify-center bg-gradient-to-br border-dashed border-3 border-black from-orange-200 to-blue-100 text-black rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 cursor-pointer"
        >
          <FaPlusCircle className="text-5xl mb-3" />
          <h2 className="text-2xl font-bold tracking-wide">
            Add New Product
          </h2>
          <p className="text-sm text-orange-800 mt-2 text-center">
            Click here to add a new product to your shop
          </p>
        </div>

        {/* 🧾 Product Cards */}
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600 text-center col-span-full text-lg">
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-5 flex flex-col sm:flex-row gap-5 items-center"
            >
              {/* 🖼️ Product Image */}
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-xl border border-gray-300 shadow-sm"
              />

              {/* 🧾 Product Details */}
              <div className="flex-1 text-center sm:text-left">
                {editId === product.id ? (
                  <>
                    {/* ✏️ Edit Fields */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <input
                        type="text"
                        name="productName"
                        value={editData.productName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800 focus:ring-2 focus:ring-blue-400"
                        placeholder="Product Name"
                      />
                      <input
                        type="text"
                        name="category"
                        value={editData.category}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800 focus:ring-2 focus:ring-blue-400"
                        placeholder="Category"
                      />
                      <input
                        type="number"
                        name="price"
                        value={editData.price}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800 focus:ring-2 focus:ring-blue-400"
                        placeholder="Price"
                      />
                      <input
                        type="number"
                        name="stock"
                        value={editData.stock}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800 focus:ring-2 focus:ring-blue-400"
                        placeholder="Stock"
                      />
                      <input
                        type="number"
                        name="discount"
                        value={editData.discount}
                        onChange={handleChange}
                        className="col-span-2 border border-gray-300 rounded-lg px-3 py-1.5 text-gray-800 focus:ring-2 focus:ring-blue-400"
                        placeholder="Discount"
                      />
                    </div>

                    {/* 💾 Save/Cancel */}
                    <div className="flex justify-center sm:justify-start gap-3">
                      <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition font-semibold"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="bg-gray-400 text-white px-4 py-1.5 rounded-lg hover:bg-gray-500 transition font-semibold"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* 👀 Normal View */}
                    <h3 className="text-2xl font-extrabold text-blue-900 mb-1 tracking-wide">
                      {product.productName}
                    </h3>
                    <p className="text-lg font-semibold text-orange-600 mb-3">
                      <FaTag className="inline mr-1" /> {product.category}
                    </p>

                    <div className="text-gray-700 mb-4 space-y-1">
                      <p className="font-medium text-lg">
                        💰 Price:{" "}
                        <span className="font-bold text-gray-900">
                          ₹{product.price}
                        </span>
                      </p>
                      <p className="font-medium text-lg">
                        📦 Stock:{" "}
                        <span className="font-bold text-gray-900">
                          {product.stock}
                        </span>
                      </p>
                      <p className="font-medium text-lg">
                        🏷️ Discount:{" "}
                        <span className="font-bold text-gray-900">
                          {product.discount}%
                        </span>
                      </p>
                    </div>

                    {/* 🛠️ Edit/Delete Buttons */}
                    <div className="flex justify-center sm:justify-start gap-3">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition font-semibold flex items-center gap-2"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-orange-500 text-white px-4 py-1.5 rounded-lg hover:bg-orange-600 transition font-semibold flex items-center gap-2"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllProducts;
