 
const roles = [
  {
    name: "Customer",
    icon: "🛍️", // yahan tum emoji ya image bhi use kar sakte ho
  },
  {
    name: "Shopkeeper",
    icon: "🏪",
  },
  {
    name: "Admin",
    icon: "⚙️",
  },
];

const RoleSelection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-gray-900 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-8 text-white">
        <h1 className="font-bold text-lg">Smart Local Shop</h1>
        <nav className="space-x-4">
          <button className="hover:underline">Information</button>
          <button className="hover:underline">Login</button>
          <button className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600">
            Logout
          </button>
        </nav>
      </header>

      {/* Main content */}
      <main className="text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
          Welcome to Smart Local Shop!
        </h2>
        <p className="mb-8 text-gray-300">
          Please select your role to continue
        </p>

        {/* Role buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {roles.map((role) => (
            <button
              key={role.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 bg-opacity-40 rounded-xl hover:bg-opacity-60 transition text-white"
            >
              <span className="text-4xl mb-2">{role.icon}</span>
              <span className="font-semibold">{role.name}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RoleSelection;
