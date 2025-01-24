import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
            <span className="text-blue-400">Wash</span>
            <span>Point</span>
        </div>

        <ul className="flex gap-16 text-lg text-white">
          <li>
            <NavLink to="/">
              <span className="text-white hover:text-blue-400">Home</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/pesanan">
              <span className="text-white hover:text-blue-400">Pesanan</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/logout">
              <span className="text-white hover:text-blue-400">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
