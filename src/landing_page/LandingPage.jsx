import ambani from '../assets/ambani.png'
import logo from '../assets/return.png'
import cart from '../assets/shopping-cart.png'
import cart2 from '../assets/sync.png'
import cart3 from '../assets/customer.png'
import cart4 from '../assets/deposit.png'
import customerimg from '../assets/customer.png'
import shopkeepers from '../assets/shopkeers.png'
import admins from '../assets/admins.png'

import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()

  return (
    <>
      {/* //nabvar */}
      <div className=" ">
        <div className="grid grid-cols-2 items-center border-b border-gray-300 py-3 px-4 md:px-8 bg-white shadow-sm">
  {/* Logo Section */}
  <div className="flex items-center space-x-3">
    <img src={logo} width="50" className="rounded-full shadow-sm" alt="Smart Local Shop Logo" />
    <span className="font-bold text-2xl text-gray-900">Smart Local Shop</span>
  </div>

  {/* Buttons Section */}
  <div className="flex items-center justify-end space-x-4">
    <button
      onClick={() => navigate('/login')}
      className="border border-gray-400 hover:border-gray-600 hover:text-gray-900 text-gray-700 font-semibold px-5 py-2 rounded-lg transition-all duration-300"
    >
      Login
    </button>

    <button
      onClick={() => navigate('/askrole')}
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-300"
    >
      Get Started
    </button>
  </div>
</div>


      <div className="p-10 my-auto flex items-center w-full h-auto md:container mx-auto">
  <div className="relative rounded-[30px] overflow-hidden mx-auto w-full md:w-[90%] h-[90vh] shadow-2xl">
    {/* Background Image */}
    <img
      src={ambani}
      alt="Ambani"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex flex-col justify-center px-8 md:px-16">
      {/* Heading */}
      <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
        <span className="text-blue-500">Empowering</span> Local Shops,<br />
        Connecting <span className="text-orange-400">Communities</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-lg leading-relaxed">
        Smart Local Shop is your all-in-one digital platform for small business success —
        manage inventory, billing, and customer relationships effortlessly.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-8">
        <button
          onClick={() => navigate('/askrole')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate('/login')}
          className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</div>
        {/* real problem real real solution */}

       <div className="bg-gradient-to-b from-gray-50 to-blue-50 py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-5xl font-extrabold text-blue-900">
      Real Problems, <span className="text-orange-500">Real Solutions</span>
    </h1>
    <p className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto">
      Small shopkeepers and customers in India face unique challenges — <span className="font-semibold text-blue-700">Smart Local Shop</span> is here to help bridge the gap with digital empowerment.
    </p>
  </div>

  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {/* Card 1 */}
    <div className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl border border-transparent hover:border-blue-600 transition-all duration-500 p-8 text-center">
      <div className="bg-gradient-to-r from-blue-500 to-orange-400 w-20 h-20 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <img src={cart} width="40" alt="Stock" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-all">
        Stock Management
      </h2>
      <p className="mt-3 text-gray-600 text-lg leading-relaxed">
        Simplify your inventory process and track stock in real-time with ease.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl border border-transparent hover:border-blue-600 transition-all duration-500 p-8 text-center">
      <div className="bg-gradient-to-r from-blue-500 to-orange-400 w-20 h-20 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <img src={cart2} width="40" alt="Time" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-all">
        Time Efficiency
      </h2>
      <p className="mt-3 text-gray-600 text-lg leading-relaxed">
        Automate daily tasks and spend more time engaging with your customers.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl border border-transparent hover:border-blue-600 transition-all duration-500 p-8 text-center">
      <div className="bg-gradient-to-r from-blue-500 to-orange-400 w-20 h-20 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <img src={cart3} width="40" alt="Customer" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-all">
        Customer Engagement
      </h2>
      <p className="mt-3 text-gray-600 text-lg leading-relaxed">
        Build long-lasting relationships with personalized offers and updates.
      </p>
    </div>

    {/* Card 4 */}
    <div className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl border border-transparent hover:border-blue-600 transition-all duration-500 p-8 text-center">
      <div className="bg-gradient-to-r from-blue-500 to-orange-400 w-20 h-20 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <img src={cart4} width="40" alt="Finance" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-all">
        Financial Tracking
      </h2>
      <p className="mt-3 text-gray-600 text-lg leading-relaxed">
        Keep a close eye on sales and profits with smart financial insights.
      </p>
    </div>
  </div>
</div>


        {/* third */}

       <div className="relative bg-gradient-to-b from-blue-50 to-white py-24 px-8">
  {/* Heading Section */}
  <div className="text-center max-w-4xl mx-auto">
    <h1 className="text-5xl font-extrabold text-blue-900">
      Our <span className="text-orange-500">Comprehensive Solution</span>
    </h1>
    <p className="text-gray-600 text-xl mt-4">
      We provide a seamless digital experience for both <span className="text-blue-700 font-semibold">Shopkeepers</span> and <span className="text-blue-700 font-semibold">Customers</span>.
    </p>
  </div>

  {/* Card Grid */}
  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
    {/* Card 1 */}
    <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={customerimg}
          alt="Shopkeeper App"
          className="w-full h-64 object-cover rounded-t-3xl transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-all text-center md:text-left">
          Shopkeeper App
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center md:text-left">
          Manage your store efficiently — track inventory, sales, and customers in real-time from your mobile device.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={shopkeepers}
          alt="Customer App"
          className="w-full h-64 object-cover rounded-t-3xl transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-all text-center md:text-left">
          Customer App
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center md:text-left">
          Customers can browse shops, discover local deals, and make seamless purchases — all in one place.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={admins}
          alt="Seamless Interaction"
          className="w-full h-64 object-cover rounded-t-3xl transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-all text-center md:text-left">
          Seamless Interaction
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center md:text-left">
          A unified system where shopkeepers and customers connect easily — ensuring trust, transparency, and speed.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* forth */}

        <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-24 px-8">
          <h1 className="text-center text-5xl font-extrabold text-blue-800 mb-16">
            How it Works in <span className="text-orange-500">3 Simple Steps</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-10 text-center">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-md group-hover:scale-110 transition-all">
                1
              </div>
              <h2 className="mt-10 text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition-all">
                Shopkeeper Onboarding
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Shopkeepers easily register and set up their digital shop in minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-10 text-center">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-md group-hover:scale-110 transition-all">
                2
              </div>
              <h2 className="mt-10 text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition-all">
                Customer Engagement
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Connect with customers through the app, offering personalized service and deals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-10 text-center">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-md group-hover:scale-110 transition-all">
                3
              </div>
              <h2 className="mt-10 text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition-all">
                Seamless Transactions
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Customers browse, order, and pay seamlessly through the app for a smooth experience.
              </p>
            </div>
          </div>
        </div>


        {/* fidth */}

       <div className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-8 overflow-hidden">
  {/* Subtle Background Pattern */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

  {/* Header */}
  <div className="text-center relative z-10">
    <h1 className="text-5xl font-extrabold text-blue-900">What Our Users Say</h1>
    <p className="text-gray-600 text-xl mt-3">
      Hear from shopkeepers and customers who <span className="text-blue-700 font-semibold">love</span> our platform.
    </p>
  </div>

  {/* Testimonial Grid */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-16">
    {/* Card 1 */}
    <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
      <div className="flex items-center space-x-4">
        <img src={ambani} alt="user" className="w-16 h-16 rounded-full object-cover border-2 border-orange-400" />
        <div>
          <h3 className="font-bold text-xl text-gray-800">Priyansh Sharma</h3>
          <p className="text-gray-500 text-md">Shopkeeper</p>
        </div>
      </div>

      <div className="mt-4 flex space-x-1 text-yellow-400 text-lg">
        {[...Array(4)].map((_, i) => (
          <i key={i} className="fa fa-star"></i>
        ))}
        <i className="fa fa-star text-gray-300"></i>
      </div>

      <p className="mt-5 text-gray-700 text-lg italic leading-relaxed">
        “Smart Local Shop completely changed how I manage my store — the inventory tools are simply brilliant!”
      </p>
    </div>

    {/* Card 2 */}
    <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
      <div className="flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"
          alt="user"
          className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
        />
        <div>
          <h3 className="font-bold text-xl text-gray-800">Gukesh Kumar</h3>
          <p className="text-gray-500 text-md">Customer</p>
        </div>
      </div>

      <div className="mt-4 flex space-x-1 text-yellow-400 text-lg">
        {[...Array(4)].map((_, i) => (
          <i key={i} className="fa fa-star"></i>
        ))}
        <i className="fa fa-star text-gray-300"></i>
      </div>

      <p className="mt-5 text-gray-700 text-lg italic leading-relaxed">
        “Super easy to find nearby shops and deals. I love the convenience and fast service.”
      </p>
    </div>

    {/* Card 3 */}
    <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
      <div className="flex items-center space-x-4">
        <img
          src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80"
          alt="user"
          className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
        />
        <div>
          <h3 className="font-bold text-xl text-gray-800">Torry Henry</h3>
          <p className="text-gray-500 text-md">Customer</p>
        </div>
      </div>

      <div className="mt-4 flex space-x-1 text-yellow-400 text-lg">
        {[...Array(4)].map((_, i) => (
          <i key={i} className="fa fa-star"></i>
        ))}
        <i className="fa fa-star text-gray-300"></i>
      </div>

      <p className="mt-5 text-gray-700 text-lg italic leading-relaxed">
        “I love the smooth payment process and quick shop updates — feels like a modern shopping experience.”
      </p>
    </div>
  </div>
</div>

        {/* footer */}

<div className="bg-white border-t border-gray-200">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto p-[5vw]">
    {/* Logo & About */}
    <div className="flex flex-col">
      <div className="flex items-center space-x-3">
        <img src={logo} width="50" className="rounded-full shadow-sm" />
        <span className="font-bold text-xl text-gray-900">Smart Local Shop</span>
      </div>
      <p className="mt-4 text-gray-600 text-md leading-relaxed">
        Shopkeepers can easily register and set up their digital shop within minutes — simple, smart and efficient.
      </p>
    </div>

    {/* Links */}
    <div>
      <h1 className="font-bold text-2xl mb-3 text-gray-900">Links</h1>
      <ul className="space-y-3">
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition">Home</li>
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition">Features</li>
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition">Pricing</li>
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition">FAQs</li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h1 className="font-bold text-2xl mb-3 text-gray-900">Legal</h1>
      <ul className="space-y-3">
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition">Terms & Conditions</li>
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition">Privacy Policy</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h1 className="font-bold text-2xl mb-3 text-gray-900">Contact Us</h1>
      <ul className="space-y-3 text-gray-600">
        <li>📞 +91 1234567890</li>
        <li>✉️ support@smartlocalshop.com</li>
        <li>📍 123, Main Street, Indore, India</li>
      </ul>
    </div>
  </div>

  {/* Bottom line */}
  <div className="border-t border-gray-200 text-center py-5 text-gray-500 text-sm">
    © 2025 Smart Local Shop — All Rights Reserved.
  </div>
</div>

        <div className="bg-white text-gray-500 text-md py-5 text-center border-t-1 border-gray-200">
          © 2024 Smart Local Shop. All rights reserved.
        </div>
      </div>

    </>
  )
}

export default LandingPage;
