import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const RoleContext = createContext();

export default function ContextProvider({ children }) {
  const [role, setRole] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem("roleId");
    const storedAuth = localStorage.getItem("auth");

    if (storedRole !== null) {
      setAuth(storedAuth);
      setRole(storedRole);
    }
  }, []);

  const Login = (role, auth) => {
    setAuth(auth);
    setRole(role);
  };

  return (
    <RoleContext.Provider value={{ role, auth, Login }}>
      {children}
    </RoleContext.Provider>
  );
}
