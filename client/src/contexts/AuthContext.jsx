import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //check if use is logged in storage
    const savedAuth = localStorage.getItem("isLoggedIn");
    const savedUser = localStorage.getItem("user");

    if (savedAuth && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, remember = false) => {
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });
      const userData = res.data.user;
      const token = res.data.token;

      setIsAuthenticated(true);
      setUser(userData);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(userData));
      localStorage.setItem("token", token);

      if (remember) {
        localStorage.setItem("rememberLogin", "true");
      }
      return userData;
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Đăng nhập thất bại, vui lòng thử lại!"
      );
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login }}>
      {children}
    </AuthContext.Provider>
  );
};
