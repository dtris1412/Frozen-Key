import React, { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import AdminDashboard from "./pages/admin";
import "./styles/app.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login setCurrentPage={setCurrentPage} />;
      case "register":
        return <Register setCurrentPage={setCurrentPage} />;
      case "cart":
        return <Cart setCurrentPage={setCurrentPage} />;
      case "admin":
        return <AdminDashboard setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <div className="app">
        <div className="app-background">
          <div className="crystal-overlay"></div>
        </div>
        <Header setCurrentPage={setCurrentPage} />
        <main className="main-content">{renderPage()}</main>
        {currentPage !== "admin" && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
