import { AskRole } from "./components/AskRole"
import { LoginSignup } from "./components/LoginSignup"
import { CreateShop } from "./components/CreateShop"
import LandingPage from "./landing_page/LandingPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from "./components/AddProduct"
import ShopkeeperDashboard from "./components/ShopkeeperDashboard.jsx"
import AddProductss from "./components/AddProductss.jsx"
import { EditShop } from "./components/AddShop.jsx"
import { OrderShopkeeper } from "./components/OrderShopkeeper.jsx"
import { ShopDashboard } from "./components/ShopDashboard.jsx"
import AllProducts from "./components/AllProducts.jsx"


//  import {Navbar} from './Navbar'
// import AddProduct from "./components/AddProduct"
// import { AddProductPrompt } from "./components/AddProductPrompt"


function App() {


  return (
    <>
      {/* <Navbar/>
      <AskRole></AskRole>
      <LoginSignup></LoginSignup> */}
      {/* <AddProductPrompt /> */}
      {/* <AddProduct></AddProduct> */}


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/askrole" element={<AskRole />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
          <Route path="/createshop" element={<CreateShop />}></Route>
          <Route path="/create_product" element={<AddProduct></AddProduct>}></Route>
          <Route path="/shop_dashboard" element={<ShopkeeperDashboard />}>
            <Route index element={<ShopDashboard />} />
            <Route path="addproduct" element={<AddProductss></AddProductss>} />
            <Route path="editshop" element={<EditShop></EditShop>}></Route>
            <Route path="ordershopkeeper" element={<OrderShopkeeper></OrderShopkeeper>}></Route>
            <Route path="allproducts" element={<AllProducts></AllProducts>}></Route>
          </Route>

        </Routes>

      </BrowserRouter>


    </>
  )
}



export default App
