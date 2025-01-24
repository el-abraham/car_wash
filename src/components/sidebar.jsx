import React from "react";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="h-full w-64 flex flex-col items-center bg-gray-800 text-white shadow-md p-8">
      <div className="text-2xl font-bold">
        <span className="text-blue-400">Wash</span>
        <span>Point</span>
      </div>
      <div className="w-full h-full flex flex-col items-center py-6 justify-between">
        <div className="w-full flex flex-col space-y-8 mt-5">
          <NavLink
            to="/admin"
            className="w-full px-4 py-2 text-center hover:bg-gray-700"
          >
            <span className="text-white">User</span>
          </NavLink>
          <NavLink
            to="/admin/pesanan"
            className="w-full px-4 py-2 text-center hover:bg-gray-700"
          >
            <span className="text-white">Pesanan</span>
          </NavLink>
          <NavLink
            to="/admin/paket"
            className="w-full px-4 py-2 text-center hover:bg-gray-700"
          >
            <span className="text-white">Paket</span>
          </NavLink>
        </div>

        <button
          onClick={() => alert("Logged out!")}
          className="w-full px-4 py-2 text-center hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
