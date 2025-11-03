import { CiMenuFries } from "react-icons/ci";

export const Navbar =()=>{
    return(
        <>
            <div className="grid grid-cols-3 scroll md:fixed top-0 left-0 w-full bg-transparent z-50 border border-gray-600 border-bottom py-4 ">
                <div className="p-4 col-span-2 text-white font-bold text-2xl">Smart Local Shop</div>
                <div className="md:flex text-white hidden justify-end items-center mr-4">
                      <span className="ml-5 text-gray-300 ">Information</span>
                        <button className="ml-5 text-gray-300 border border-1 p-3 rounded-xl">Login</button>
                     <button className="ml-5  text-gray-300 border border-1 p-3 rounded-xl">Register</button>
                </div>
                <div className=" text-white md:hidden flex justify-end items-center mr-4"><CiMenuFries></CiMenuFries></div>
            </div>

        </>
    )
 }