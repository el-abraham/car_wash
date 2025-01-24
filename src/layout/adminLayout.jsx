import React from "react";
import Sidebar from "../components/sidebar"

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-row items-center w-screen h-screen bg-slate-300">
      <Sidebar />
      <div className="ml-[50px]">{children}</div>
    </div>
  );
}
