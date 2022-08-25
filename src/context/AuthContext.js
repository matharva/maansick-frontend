import React, { useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const a = 10;

  const value = { a };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
