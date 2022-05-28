import { useState, createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const login = (userCredentials) => {
    setToken(userCredentials.token);
  };
  const logout = () => setToken(null);
  const isLogged = () => !!token;
  const contextValue = {
    token,
    setToken,
    isLogged,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
