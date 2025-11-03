import img3 from "../assets/abstract-smooth-brown-wall-background-layout-design-studio-room-web-template-business-report-with-smooth-circle-gradient-color.jpg";
import { useState, useEffect } from "react";
import { User } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    currentLocation: "",
    Address: {
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    },
    phone: "",
    role: "",
  });

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setFormData((prev) => ({
        ...prev,
        role: storedRole,
      }));
    }
  }, []);

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["street", "city", "state", "zipcode", "country"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        Address: {
          ...prev.Address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // ✅ Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status) {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/users/login",
          formData
        );
        console.log(res);

        localStorage.setItem("token", res.data.token);
         
         if (res.data.role === "shopkeeper"){
              navigate("/shop_dashboard");
            } else{
              
            }

      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        console.log("sssssssssss");
        const res = await axios.post(
          "https://myshop-backend.onrender.com/api/users/register",
          formData,
          {
            withCredentials: true,
          },
        );
        console.log("eeeeeeeeeeeeeee");
        console.log("Full response:", res.data);
        console.log("Token:", res.data.token);
        console.log("Success:", res.data.success);

        if (res.data.success ) {
          localStorage.setItem("userId", res.data.userid);
          localStorage.setItem("token", res.data.token);


          alert("Signup successful!");
           
          // navigate("/shop_dashboard")

            if (res.data.role === "shopkeeper"){
              navigate("/createshop")
              
            } else{

            }
        }
      } catch (e) {
        console.log(e);

      }
    }
  };

  // ✅ Profile Image Preview
  const changePreview = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      profileImage: file,
    }));
  };

  return (
    <>
      <div className=" fixed w-full h-screen -z-10  "></div>

      <div className="p-[5vw] grid grid-cols-12 h-auto z-10 mx-auto place-items-center">
        <div className="md:col-span-3"></div>

        <form
          onSubmit={handleSubmit}
          className="col-span-12 md:col-span-6 border w-full h-auto p-[5vw] bg-gradient-to-br from-orange-100 via-white to-blue-100 rounded-4xl border-orange-800"
        >
          {!status && (
            <>
              <h1 className="text-center font-bold text-5xl mb-5 bg-gradient-to-r from-blue-800 to-orange-500 bg-clip-text text-transparent">
                Create Your Account
              </h1>

              <div className="mt-3">
                <label className="text-gray-600">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-orange-700 "
                />
              </div>
            </>
          )}

          {/* Email + Password */}
          {status && (
            <h1 className="text-center font-bold text-5xl mb-5 bg-gradient-to-r from-blue-800 to-orange-500 bg-clip-text text-transparent">
              Login Your Account
            </h1>
          )}

          <div className="mt-3">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-orange-700 "
            />
          </div>

          <div className="mt-3">
            <label className="text-gray-600 mt-5">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full px-5 py-2 rounded-xl ps-3 bg-gray-100 border-1 border-orange-700 "
            />
          </div>

          {/* Address Section */}
          {!status && (
            <>
              <div className="flex items-center mt-3 gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="text-gray-400 w-8 h-8" />
                  )}
                </div>

                <div>
                  <p className="text-sm text-gray-600">Profile Image</p>
                  <label
                    htmlFor="fileInput"
                    className="text-blue-500 hover:underline cursor-pointer font-medium"
                  >
                    Upload a file
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    name="profileImage"
                    className="hidden"
                    onChange={changePreview}
                  />
                </div>
              </div>

              {/* ✅ Role Selection Dropdown */}
              {!status && (
                <div className="mt-3">
                  <label className="text-gray-600">Select Role</label>
                  <br />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-5 py-2 rounded-xl bg-gray-100 border-1 border-orange-700"
                  >
                    <option value="">-- Select Role --</option>
                    <option value="shopkeeper">Shopkeeper</option>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              )}

              <div className="mt-3">
                <label className="text-gray-600">Current Location</label>
                <br />
                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  placeholder="Enter your current address"
                  className="w-full px-5 py-2 rounded-xl ps-3 bg-gray-100 border-1 border-orange-700 "
                />
              </div>

              <div className="mt-5">
                <h1 className="font-bold text-lg mt-3">Address</h1>

                <div className="grid grid-cols-2 gap-3 container">
                  <div className="mt-3">
                    <label className="text-gray-600">Street</label>
                    <br />
                    <input
                      type="text"
                      name="street"
                      value={formData.Address.street}
                      onChange={handleChange}
                      placeholder="Enter Your Street"
                      className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-orange-700 "
                    />
                  </div>

                  <div className="mt-3">
                    <label className="text-gray-600">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.Address.city}
                      onChange={handleChange}
                      placeholder="Enter Your City"
                      className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-orange-700 "
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3 container">
                  <div className="mt-3">
                    <label className="text-gray-600">State</label>
                    <br />
                    <input
                      type="text"
                      name="state"
                      value={formData.Address.state}
                      onChange={handleChange}
                      placeholder="Enter Your State"
                      className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-orange-700 "
                    />
                  </div>

                  <div className="mt-3">
                    <label className="text-gray-600">Zip code</label>
                    <input
                      type="text"
                      name="zipcode"
                      value={formData.Address.zipcode}
                      onChange={handleChange}
                      placeholder="Enter Your Zip code"
                      className="w-full px-5 py-2 ps-3 rounded-xl bg-gray-100 border-1 border-orange-700 "
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="text-gray-600">Country</label>
                  <br />
                  <input
                    type="text"
                    name="country"
                    value={formData.Address.country}
                    onChange={handleChange}
                    placeholder="Enter your Country"
                    className="w-full px-5 py-2 rounded-xl ps-3 bg-gray-100 border-1 border-orange-700 "
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-800 to-orange-500 w-full text-white font-bold mt-5 px-5 py-2 rounded-xl"
          >
            {status ? "Login" : "SignUp"}
          </button>

          <p
            onClick={() => setStatus(!status)}
            className="text-blue-500 mt-3 text-center cursor-pointer"
          >
            {status
              ? "Create New Account? Signup here"
              : "Already have an account? Login here"}
          </p>
        </form>

        <div className="md:col-span-3"></div>
      </div>
    </>
  );
};
