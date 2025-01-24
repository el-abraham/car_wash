import React, { useState } from "react";
import { NavLink } from "react-router";
import { login } from "../api/authApi";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
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
    const req = await login(data);
    if (req.status == 200) {
      alert(req.message);

      localStorage.setItem("token", req.data.token);
      localStorage.setItem("userId", req.data.id);
      localStorage.setItem("roleId", req.data.role);
      localStorage.setItem("auth", true);

      if (req.data.role == 1) {
        navigate("/");
      } else if (req.data.role == 3) {
        navigate("/admin");
      }
      setData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-[350px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Belum punya akun?{" "}
          <NavLink to="/register" className="text-blue-500 hover:underline">
            Daftar
          </NavLink>
        </p>
      </div>
    </div>
  );
}
