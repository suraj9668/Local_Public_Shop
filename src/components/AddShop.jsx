import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const EditShop = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    shopName: "",
    shopLogo: "",
    shopType: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    openingHours: "",
    closingDay: "",
    minOrderValue: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.shopName.trim()) newErrors.shopName = "Shop name is required";
    if (!formData.shopType.trim()) newErrors.shopType = "Shop type is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.openingHours.trim()) newErrors.openingHours = "Opening hours are required";
    if (!formData.closingDay.trim()) newErrors.closingDay = "Closing day is required";
    if (formData.minOrderValue && formData.minOrderValue < 0)
      newErrors.minOrderValue = "Minimum order value cannot be negative";
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

    console.log("Updated Shop Data:", formData);
    alert("✅ Shop details updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Back Button */}
      <header className="px-8 py-4 flex items-center gap-4 ">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-800 hover:text-orange-500 transition"
        >
          <FaArrowLeft /> 
        </button>
        <h2 className="text-2xl font-semibold text-blue-900">Edit Shop Details</h2>
      </header>

      {/* Form Section */}
      <section className="flex-1 flex justify-center items-start p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-orange-100 via-white to-blue-100 w-full max-w-3xl rounded-2xl shadow-md p-8 space-y-6 border border-gray-100"
        >
          {/* Shop Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Shop Name</label>
            <input
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
              placeholder="Enter your shop name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
            />
            {errors.shopName && <p className="text-red-600 text-sm mt-1">{errors.shopName}</p>}
          </div>

          {/* Shop Logo URL */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Shop Logo URL</label>
            <input
              type="text"
              name="shopLogo"
              value={formData.shopLogo}
              onChange={handleChange}
              placeholder="Paste image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Shop Type + Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Shop Type</label>
              <input
                type="text"
                name="shopType"
                value={formData.shopType}
                onChange={handleChange}
                placeholder="e.g., Grocery, Bakery, Clothing"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.shopType && <p className="text-red-600 text-sm mt-1">{errors.shopType}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="shop@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Address & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full shop address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City / Area name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
            </div>
          </div>

          {/* Opening Hours & Closing Day */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Opening Hours</label>
              <input
                type="text"
                name="openingHours"
                value={formData.openingHours}
                onChange={handleChange}
                placeholder="e.g., 9:00 AM - 9:00 PM"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.openingHours && (
                <p className="text-red-600 text-sm mt-1">{errors.openingHours}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Closing Day</label>
              <input
                type="text"
                name="closingDay"
                value={formData.closingDay}
                onChange={handleChange}
                placeholder="e.g., Sunday"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              {errors.closingDay && (
                <p className="text-red-600 text-sm mt-1">{errors.closingDay}</p>
              )}
            </div>
          </div>

          {/* Minimum Order Value */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Minimum Order Value (₹)</label>
            <input
              type="number"
              name="minOrderValue"
              value={formData.minOrderValue}
              onChange={handleChange}
              placeholder="Enter minimum order value"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
            />
            {errors.minOrderValue && (
              <p className="text-red-600 text-sm mt-1">{errors.minOrderValue}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Write about your shop..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-800 to-orange-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

 
