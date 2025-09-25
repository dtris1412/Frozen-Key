import React, { useState } from "react";
import "../styles/header.css";

const Header = ({ setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        {/* Hàng 1 */}
        <div className="header-row header-row-top">
          <div className="logo" onClick={() => setCurrentPage("home")}>
            <div className="logo-icon">❄️</div>
            <span className="logo-text">FrozenKey</span>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm game, software..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
          <div className="header-actions">
            <button className="cart-btn" onClick={() => setCurrentPage("cart")}>
              🛒 <span className="cart-count">3</span>
            </button>
            <button
              className="login-btn"
              onClick={() => setCurrentPage("login")}
            >
              Đăng nhập
            </button>
            <button
              className="register-btn"
              onClick={() => setCurrentPage("register")}
            >
              Đăng ký
            </button>
          </div>
        </div>
        {/* Hàng 2 */}
        <nav className="header-row header-row-bottom main-nav">
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span>Danh mục ▼</span>
            {showDropdown && (
              <div className="dropdown-menu">
                <a href="#games">Game</a>
                <a href="#education">Học tập</a>
                <a href="#work">Làm việc</a>
                <a href="#utilities">Tiện ích</a>
                <a href="#ai">AI Tools</a>
              </div>
            )}
          </div>
          <a href="#popular" className="nav-item">
            Xem nhiều
          </a>
          <a href="#promotion" className="nav-item">
            Khuyến mãi
          </a>
          <a href="#new" className="nav-item">
            Sản phẩm mới
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
