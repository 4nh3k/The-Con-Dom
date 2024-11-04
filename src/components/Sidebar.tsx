// src/components/Sidebar.js

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Categories</h2>
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="block text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            T-Shirts
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Plain T-Shirts
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Vintage T-Shirts
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Long Sleeve T-Shirts
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-lg text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Tank Tops
          </a>
        </li>
        {/* Add more categories as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
