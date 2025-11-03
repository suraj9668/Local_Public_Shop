import { 
  FaStore, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCalendarAlt, 
  FaTag, 
  FaShoppingBasket 
} from "react-icons/fa";
import { useOutletContext } from "react-router-dom";


const ShopOverview = () => {

  const {shop} = useOutletContext();

   
  return (
    <div className="bg-gradient-to-br from-orange-100 via-white to-blue-100 rounded-3xl shadow-2xl border border-gray-200 p-10 flex flex-col md:flex-row items-center justify-between transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-[1.01] overflow-hidden">

      {/* LEFT SIDE CONTENT */}
      <div className="w-full md:w-3/5 space-y-6">
        
        {/* Shop Name + Type */}
        <div className="flex items-center gap-3">
          <FaStore className="text-blue-800 text-4xl drop-shadow-sm" />
          <div>
            <h2 className="text-4xl font-extrabold text-blue-900 capitalize tracking-wide">
              {shop?.shopName || "My Awesome Shop"}
            </h2>
            <p className="text-lg text-orange-600 font-semibold">
              {shop?.shopType || "Grocery & Daily Essentials"}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/70 backdrop-blur-sm border border-gray-300 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-gray-800 text-lg leading-relaxed font-medium">
            {shop?.description || 
              "Welcome to our store! We offer high-quality products with the best service and trust. Your satisfaction is our top priority. Shop smart, shop local!"}
          </p>
        </div>

        {/* Basic Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          
          <div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
            <FaEnvelope className="text-orange-600 text-2xl group-hover:scale-110 transition" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-800">{shop?.email || "shop@email.com"}</p>
            </div>
          </div>

          <div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600 text-2xl group-hover:scale-110 transition" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold text-gray-800">{shop?.phone || "+91 9876543210"}</p>
            </div>
          </div>

          <div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-600 text-2xl group-hover:scale-110 transition" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-semibold text-gray-800">{shop?.address || "Shop Address, City"}</p>
            </div>
          </div>

          <div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
            <FaTag className="text-yellow-600 text-2xl group-hover:scale-110 transition" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold text-gray-800">{shop?.location || "Local Market / Online"}</p>
            </div>
          </div>
        </div>

        {/* Timing and Other Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
          <div className="bg-gradient-to-r from-green-100 to-green-50 border border-green-200 rounded-xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition">
            <FaClock className="text-green-700 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Opening Hours</p>
              <p className="font-semibold text-gray-800">{shop?.openingHours || "9:00 AM - 9:00 PM"}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-pink-50 border border-pink-200 rounded-xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition">
            <FaCalendarAlt className="text-pink-700 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Closing Day</p>
              <p className="font-semibold text-gray-800">{shop?.closingDay || "Sunday"}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition">
            <FaShoppingBasket className="text-purple-700 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Min Order Value</p>
              <p className="font-semibold text-gray-800">₹{shop?.minOrderValue || 100}</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex flex-col items-center mt-10 md:mt-0">
        <img
          src={shop?.shopLogo || "https://cdn-icons-png.flaticon.com/512/5336/5336127.png"}
          alt="Shop Logo"
          className="w-56 h-56 object-contain rounded-3xl border border-gray-300 shadow-xl hover:scale-105 transition-all duration-300"
        />
        <p className="mt-4 text-gray-700 text-base italic font-medium">
          “Delivering trust, quality, and happiness every day.”
        </p>
      </div>
    </div>
  );
};

export default ShopOverview;


// git remote add origin https://github.com/suraj9668/Local_Public_Shop.git

// surajmalviya9668_db_user

// tQxLOuX4K18fZwC3

// mongodb+srv://surajmalviya9668_db_user:tQxLOuX4K18fZwC3@cluster0.d3u7yv0.mongodb.net/?appName=Cluster0

// local-public-shop-1dunt9uuv-suraj9668s-projects.vercel.app

// local-public-shop.vercel.app