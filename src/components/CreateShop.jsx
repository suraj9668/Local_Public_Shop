import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateShop = () => {
  const navigate = useNavigate();
  const [shopData, setShopData] = useState({
    shopName: "",
    shopLogo: "",
    shopType: "",
    shopAddress: "",
    shopPhone: "",
    shopEmail: "",
    shopDescription: "",
    shopOpeningHours: "",
    shopClosingHours: "",
    shopLocation: "",
  });

  const [ownerId, setOwnerId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("userId"); // yahan sidha string milega
    if (id) {
      setOwnerId(id);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://myshop-backand.onrender.com/api/shop/createshop", {
        ...shopData,
        ownerId,
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("shopId", res.data.shopId);
        alert("Shop Created Successfully");
        navigate("/shop_dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="  from-white min-h-screen">
        <div className="flex flex-col justify-center items-center w-full h-auto p-[5vw]">
          <div className="mx-auto">
            <h1 className="text-center font-bold text-5xl mb-5 bg-gradient-to-r from-blue-800 to-orange-500 bg-clip-text text-transparent">
                Create Your Shop
              </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="border border-1 bg-gradient-to-br from-orange-100 via-white to-blue-100  border-orange-800 mt-5 rounded-[20px]">

              {/* Shop Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className="  text-black p-5 flex items-center font-bold text-xl rounded-tl-[20px] rounded-tr-[20px] md:rounded-tr-none">
                  <p>What name would you like to give your shop?</p>
                </div>
                <div className="p-5  md:rounded-tr-[20px]">
                  <label className="text-gray-600">Shop Name</label>
                  <input
                    type="text"
                    name="shopName"
                    value={shopData.shopName}
                    onChange={handleChange}
                    placeholder="Enter shop name"
                    className="w-full mt-2 px-5 py-2 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  />
                </div>
              </div>

              {/* Shop Logo */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className="  text-black p-5 flex items-center font-bold text-xl">
                  <p>Would you like to upload your shop logo?</p>
                </div>
                <div className="p-5 ">
                  <label className="text-gray-600">Shop Logo</label>
                  <input
                    type="file"
                    name="shopLogo"
                    value={shopData.shopLogo}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  />
                </div>
              </div>

              {/* Shop Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className="  text-black p-5 flex items-center font-bold text-xl">
                  <p>What type of shop are you creating?</p>
                </div>
                <div className="p-5 ">
                  <label className="text-gray-600">Shop Type</label>
                  <select
                    name="shopType"
                    className="w-full mt-2 p-2 rounded-xl bg-gray-100 shadow-green shadow-xl"
                    value={shopData.shopType}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option>Grocery</option>
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Restaurant</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className="  text-black p-5 flex items-center font-bold text-xl">
                  <p>Can you describe your shop briefly?</p>
                </div>
                <div className="p-5 ">
                  <label className="text-gray-600">Description</label>
                  <textarea
                    name="shopDescription"
                    value={shopData.shopDescription}
                    onChange={handleChange}
                    placeholder="Enter short description"
                    className="w-full mt-2 p-3 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className="  text-black p-5 flex items-center font-bold text-xl">
                  <p>What’s your business email address?</p>
                </div>
                <div className="p-5 ">
                  <label className="text-gray-600">Email</label>
                  <input
                    type="email"
                    name="shopEmail"
                    value={shopData.shopEmail}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full mt-2 px-5 py-2 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className="  text-black p-5 flex items-center font-bold text-xl">
                  <p>Can we get your shop contact number?</p>
                </div>
                <div className="p-5 ">
                  <label className="text-gray-600">Phone</label>
                  <input
                    type="tel"
                    name="shopPhone"
                    value={shopData.shopPhone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full mt-2 px-5 py-2 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className="  text-black p-5 flex items-center font-bold text-xl">
                  <p>Where is your shop located?</p>
                </div>
                <div className="p-5 ">
                  <label className="text-gray-600">Address</label>
                  <textarea
                    name="shopAddress"
                    value={shopData.shopAddress}
                    onChange={handleChange}
                    placeholder="Enter shop address"
                    className="w-full mt-2 p-3 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className=" text-black p-5 flex items-center font-bold text-xl">
                  <p>Which area or city does your shop serve?</p>
                </div>
                <div className="p-5 ">
                  <label className="text-gray-600">Location</label>
                  <input
                    type="text"
                    name="shopLocation"
                    value={shopData.shopLocation}
                    onChange={handleChange}
                    placeholder="Enter city or area"
                    className="w-full mt-2 px-5 py-2 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  />
                </div>
              </div>

              {/* Opening Hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500">
                <div className=" text-black p-5 flex items-center font-bold text-xl">
                  <p>What time does your shop open?</p>
                </div>
                <div className="p-5 ">
                  <label className="text-gray-600">Opening Hours</label>
                  <input
                    type="time"
                    name="shopOpeningHours"
                    value={shopData.shopOpeningHours}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  />
                </div>
              </div>

              {/* Closing Day */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-500 rounded-b-[20px]">
                <div className="  text-black p-5 flex items-center font-bold text-xl rounded-bl-none md:rounded-bl-[20px]">
                  <p>Which day is your shop closed?</p>
                </div>
                <div className="p-5  rounded-br-[20px] rounded-bl-[20px] md:rounded-bl-none">
                  <label className="text-gray-600">Closing Day</label>
                  <select
                    name="shopClosingDay"
                    value={shopData.shopClosingDay}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 rounded-xl bg-gray-100 shadow-green shadow-xl"
                  >
                    <option value="">Select Day</option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 mx-auto   flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-800 to-orange-500 text-white px-8 py-3 rounded-4xl w-md font-bold hover:bg-blue-800 transition"
              >
                Submit Shop
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
