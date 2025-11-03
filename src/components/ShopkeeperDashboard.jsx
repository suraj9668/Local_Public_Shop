import {
  FaHome,
  FaChartLine,
  FaUser,
  FaSignOutAlt,
  FaBell,
  FaStore,
  FaPlusCircle,
  FaEdit,

} from "react-icons/fa";
// import ShopOverview from "./ShopOverview";
import { Outlet , Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ShopkeeperDashboard = () => {

  const [shop, setShop] = useState(null)
  // const navigate = useNavigate();

 


  useEffect(() => {

    async function dashboard() {
      const token = localStorage.getItem("token")
      console.log(token)
      const dashRes = await axios.get("http://localhost:3000/api/users/dashboard", {
        headers: {
          Authorization: token
        }
      })
      
      console.log(dashRes)
      if (dashRes.data.userData.role === "shopkeeper") {
        alert("Dashboard successful!");
        setShop(dashRes.data.shopData)
        
       }
    }
    dashboard()

  }, [])
 
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b fixed left-0 h-screen from-blue-800 to-orange-500 text-white flex flex-col justify-between shadow-xl">
        <div>
          <div className="p-6 text-center border-b border-white/30">
            <h1 className="text-2xl font-bold tracking-wide">SmartShop</h1>
            <p className="text-sm opacity-80">Shopkeeper Panel</p>
          </div>

          <nav className="mt-6 space-y-1 px-3">
            {[
              { icon: <FaHome />, label: "Dashboard", path: "/shop_dashboard" },
              { icon: <FaStore />, label: "Edit Shop", path: "/shop_dashboard/editshop" },
              { icon: <FaPlusCircle />, label: "ALL Products", path: "/shop_dashboard/allproducts" },
              { icon: <FaEdit />, label: "Edit Products", path: "/shop_dashboard/Allproduct" },
              { icon: <FaChartLine />, label: "Orders", path: "/shop_dashboard/ordershopkeeper" },
              { icon: <FaUser />, label: "Profile", path: "/shop_dashboard/profile" },
            ].map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="flex items-center w-full gap-3 p-3 rounded-lg text-white hover:bg-white/20 transition-all"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

        </div>

        <div className="p-6 border-t border-white/30">
          <button className="flex items-center gap-3 w-full text-white hover:bg-white/20 p-3 rounded-lg transition-all">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex ml-[257px] flex-col">
        {/* ✅ Top Navbar */}
        <header className="bg-white shadow-sm px-8 py-4 flex  justify-between items-center border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-900">
            My Shop Overview (Dashboard)
          </h2>

          <div className="flex items-center gap-6">
            <FaBell className="text-gray-600 hover:text-orange-500 text-xl cursor-pointer" />
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-orange-400"
            />
          </div>
        </header>

        {/* ✅ Dashboard Content */}
        <Outlet context={{shop}}/>
      </main>
    </div>
  );
};

export default ShopkeeperDashboard;
