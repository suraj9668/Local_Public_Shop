import { useNavigate } from "react-router-dom";
import customerImg from "../assets/customer.png";
import shopkeeperImg from "../assets/shopkeers.png";
import adminImg from "../assets/admins.png";

export const AskRole = () => {
  const navigate = useNavigate();

  // Role-specific image mapping
  const roleImages = {
    customer: customerImg,
    shopkeeper: shopkeeperImg,
    admin: adminImg,
  };

  return (
    <>
      {/* Background gradient */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-gray-200 to-blue-100 -z-10"></div>

      {/* Main content */}
      <div className="relative flex flex-col justify-center items-center h-screen text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 drop-shadow-sm">
          Welcome to <span className="text-blue-700">Smart Local</span> Shop!
        </h1>

        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          Please select your role to continue
        </p>

        {/* Role cards */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 mt-10">
          {["customer", "shopkeeper", "admin"].map((role) => (
            <div
              key={role}
              className="m-3 text-center border border-gray-300 flex flex-col justify-center items-center w-[220px] sm:w-[250px] h-[180px] rounded-2xl p-5 bg-white/80 hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => {
                localStorage.setItem("role", role);
                navigate("/login");
              }}
            >
              <img
                src={roleImages[role]}
                alt={role}
                className="w-[90px] h-[90px] object-contain mb-3"
              />
              <span className="font-semibold capitalize text-gray-800 text-lg tracking-wide">
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
