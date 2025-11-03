import { useState } from "react";
import { FaArrowLeft, FaBoxOpen, FaTruck, FaCheck, FaTimes } from "react-icons/fa";

export const OrderShopkeeper = ({ onBack }) => {
  const [orders, setOrders] = useState([
    { id: "#1001", customer: "Rohan Sharma", product: "Bluetooth Speaker", qty: 2, amount: "₹1,800", status: "Pending", date: "29 Oct 2025" },
    { id: "#1002", customer: "Anita Verma", product: "Wrist Watch", qty: 1, amount: "₹1,250", status: "Confirmed", date: "28 Oct 2025" },
    { id: "#1003", customer: "Rahul Mehta", product: "Headphones", qty: 1, amount: "₹2,450", status: "Shipped", date: "27 Oct 2025" },
    { id: "#1004", customer: "Karan Jain", product: "Power Bank", qty: 3, amount: "₹2,100", status: "Delivered", date: "26 Oct 2025" },
    { id: "#1005", customer: "Neha Kapoor", product: "Smart Watch", qty: 1, amount: "₹3,000", status: "Cancelled", date: "25 Oct 2025" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-5 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
          >
            <FaArrowLeft className="text-blue-700" />
          </button>
          <h2 className="text-2xl font-semibold text-blue-900">
            Manage Orders
          </h2>
        </div>
        <div className="text-sm text-gray-600">
          Total Orders: <span className="font-semibold">{orders.length}</span>
        </div>
      </div>

      {/* Orders Table */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr className="text-gray-700 text-sm uppercase tracking-wide">
                <th className="py-3 px-5">Order ID</th>
                <th className="py-3 px-5">Customer</th>
                <th className="py-3 px-5">Product</th>
                <th className="py-3 px-5">Qty</th>
                <th className="py-3 px-5">Amount</th>
                <th className="py-3 px-5">Date</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-5 font-medium">{order.id}</td>
                  <td className="px-5">{order.customer}</td>
                  <td className="px-5 flex items-center gap-2">
                    <FaBoxOpen className="text-blue-600" /> {order.product}
                  </td>
                  <td className="px-5">{order.qty}</td>
                  <td className="px-5">{order.amount}</td>
                  <td className="px-5">{order.date}</td>
                  <td className="px-5">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-orange-100 text-orange-700"
                          : order.status === "Confirmed"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Shipped"
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 flex gap-2">
                    {order.status === "Pending" && (
                      <button
                        onClick={() => handleStatusChange(order.id, "Confirmed")}
                        className="p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
                        title="Confirm Order"
                      >
                        <FaCheck />
                      </button>
                    )}
                    {order.status === "Confirmed" && (
                      <button
                        onClick={() => handleStatusChange(order.id, "Shipped")}
                        className="p-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200"
                        title="Ship Order"
                      >
                        <FaTruck />
                      </button>
                    )}
                    {order.status === "Shipped" && (
                      <button
                        onClick={() =>
                          handleStatusChange(order.id, "Delivered")
                        }
                        className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200"
                        title="Mark Delivered"
                      >
                        <FaCheck />
                      </button>
                    )}
                    {order.status !== "Delivered" &&
                      order.status !== "Cancelled" && (
                        <button
                          onClick={() =>
                            handleStatusChange(order.id, "Cancelled")
                          }
                          className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200"
                          title="Cancel Order"
                        >
                          <FaTimes />
                        </button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
 