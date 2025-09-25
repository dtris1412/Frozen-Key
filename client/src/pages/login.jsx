import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext"; // Sửa lại import
import "../styles/auth.css";
import Toast from "../components/toast.jsx";
const Login = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useAuth(); // Sử dụng custom hook

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userData = await login(formData.email, formData.password); // Thêm const userData =
      const user = userData.roles;
      console.log("Logged in user:", userData); // Kiểm tra dữ liệu người dùng
      if (userData.roles === "admin") {
        setCurrentPage("admin");
      } else {
        setCurrentPage("home");
      }
    } catch (err) {
      setError("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="crystal-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}>
              ❄️
            </div>
          ))}
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-card login-card">
          <div className="auth-header">
            <div className="auth-logo">
              <span className="logo-icon">❄️</span>
              <span className="logo-text">FrozenKey</span>
            </div>
            <h2>Đăng nhập</h2>
            <p>Chào mừng bạn trở lại!</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Nhập email của bạn"
                required
              />
              <div className="input-glow"></div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Nhập mật khẩu"
                required
              />
              <div className="input-glow"></div>
            </div>

            {error && <div className="auth-error">{error}</div>}

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Ghi nhớ đăng nhập
              </label>
              <a href="#forgot" className="forgot-link">
                Quên mật khẩu?
              </a>
            </div>

            <button type="submit" className="auth-submit-btn">
              <span>Đăng nhập</span>
              <div className="btn-crystals">
                <span>💎</span>
                <span>✨</span>
              </div>
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Chưa có tài khoản?
              <button
                className="switch-auth-btn"
                onClick={() => setCurrentPage("register")}
              >
                Đăng ký ngay
              </button>
            </p>
          </div>

          <div className="social-login">
            <div className="divider">
              <span>Hoặc đăng nhập với</span>
            </div>
            <div className="social-buttons">
              <button className="social-btn google">
                <span>🔍</span> Google
              </button>
              <button className="social-btn facebook">
                <span>📘</span> Facebook
              </button>
            </div>
          </div>
        </div>

        <button
          className="back-home-btn"
          onClick={() => setCurrentPage("home")}
        >
          ← Về trang chủ
        </button>
      </div>
    </div>
  );
};

export default Login;
