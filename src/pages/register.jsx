import React, { useState } from "react";
import { NavLink } from "react-router";
import { register } from "../api/authApi";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const req = await register(data);
    console.log(req);

    if ((req.status = 201)) {
      alert(req.message);
      setData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login")
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-screen h-screen bg-slate-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-[350px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Nama"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 rounded-md"
          >
            Daftar
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Sudah punya akun?
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}
