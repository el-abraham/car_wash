import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const RoleContext = createContext();

export default function ContextProvider({ children }) {
  const role = localStorage.getItem("roleId")
  const auth = localStorage.getItem("auth") === "true";
  
  return (
    <RoleContext.Provider value={{ role , auth }}>
      {children}
    </RoleContext.Provider>
  );
}
