import React from "react";
import Navbar from "../components/navbar";

export default function UserLayout({ children }) {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-300">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
