import ShopOverview from "./ShopOverview.jsx"
export const ShopDashboard = ()=>{

    const shopData = {
    name: "Rajoriya Super Mart",
    category: "Grocery & Essentials",
    totalProducts: 120,
    orders: 58,
    rating: 4.7,
    image: "https://cdn-icons-png.flaticon.com/512/2972/2972361.png",
  };
    return (

        <section className="p-8 bg-gray-50 flex-1 overflow-y-auto">
                  {/* 💬 Welcome Section */}
                   
                   <ShopOverview shop={shopData}/> 
        
                  {/* 📊 Summary Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 mt-8">
                    {[
                      {
                        title: "Total Sales",
                        value: "₹1,24,560",
                        color: "bg-blue-100 text-blue-700",
                      },
                      {
                        title: "Orders Today",
                        value: "238",
                        color: "bg-orange-100 text-orange-700",
                      },
                      {
                        title: "Products in Stock",
                        value: "320",
                        color: "bg-green-100 text-green-700",
                      },
                      {
                        title: "Pending Orders",
                        value: "18",
                        color: "bg-red-100 text-red-700",
                      },
                    ].map((card, i) => (
                      <div
                        key={i}
                        className={`rounded-xl p-6 shadow-md ${card.color} font-semibold`}
                      >
                        <p className="text-lg">{card.title}</p>
                        <h3 className="text-3xl font-bold mt-2">{card.value}</h3>
                      </div>
                    ))}
                  </div>
        
                  {/* 🧾 Recent Orders */}
                  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">
                      Recent Orders
                    </h3>
        
                    <div
                      className="max-h-80 overflow-y-auto border-2 border-green-300 rounded-3xl"
                      style={{
                        scrollbarWidth: "none", // Firefox
                        msOverflowStyle: "none", // IE/Edge
                      }}
                    >
                      <style>
                        {`
              
              .max-h-80::-webkit-scrollbar {
                display: none;
              }
            `}
                      </style>
        
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100 sticky top-0 z-10">
                          <tr className="text-gray-700">
                            <th className="py-3 px-4 border-b">Order ID</th>
                            <th className="py-3 px-4 border-b">Customer</th>
                            <th className="py-3 px-4 border-b">Amount</th>
                            <th className="py-3 px-4 border-b">Status</th>
                          </tr>
                        </thead>
        
                        <tbody>
                          {[
                            {
                              id: "#1234",
                              name: "Rohan Sharma",
                              amount: "₹450",
                              status: "Delivered",
                            },
                            {
                              id: "#1235",
                              name: "Anita Verma",
                              amount: "₹780",
                              status: "Pending",
                            },
                            {
                              id: "#1236",
                              name: "Vikas Patel",
                              amount: "₹1,250",
                              status: "Shipped",
                            },
                            {
                              id: "#1237",
                              name: "Deepak Yadav",
                              amount: "₹600",
                              status: "Cancelled",
                            },
                            {
                              id: "#1238",
                              name: "Priya Singh",
                              amount: "₹1,100",
                              status: "Pending",
                            },
                            {
                              id: "#1239",
                              name: "Rahul Mehta",
                              amount: "₹980",
                              status: "Delivered",
                            },
                            {
                              id: "#1240",
                              name: "Suman Das",
                              amount: "₹720",
                              status: "Shipped",
                            },
                            {
                              id: "#1241",
                              name: "Karan Jain",
                              amount: "₹1,400",
                              status: "Cancelled",
                            },
                            {
                              id: "#1242",
                              name: "Neha Kapoor",
                              amount: "₹560",
                              status: "Delivered",
                            },
                            {
                              id: "#1243",
                              name: "Amit Tiwari",
                              amount: "₹890",
                              status: "Pending",
                            },
                          ].map((order, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4">{order.id}</td>
                              <td className="px-4">{order.name}</td>
                              <td className="px-4">{order.amount}</td>
                              <td className="px-4">
                                <span
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === "Delivered"
                                      ? "bg-green-100 text-green-700"
                                      : order.status === "Pending"
                                        ? "bg-orange-100 text-orange-700"
                                        : order.status === "Shipped"
                                          ? "bg-blue-100 text-blue-700"
                                          : "bg-red-100 text-red-700"
                                    }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
    )
}