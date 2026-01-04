import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="">
      <nav>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">User App</h1>
          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? "bg-white text-gray-800"
                    : "text-white hover:bg-gray-700"
                }`
              }
            >
              User List
            </NavLink>
            <NavLink
              to="/add-user"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? "bg-white text-gray-800"
                    : "text-white hover:bg-gray-700"
                }`
              }
            >
              Add User
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
