import React, { useState } from "react";
import "../styles/auth.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ setCurrentPage }) => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    avatar: null,
    roles: "user",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Submit register:", formData); // Thêm dòng này
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp!");
      return;
    }
    try {
      await register(
        formData.username,
        formData.email,
        formData.password,
        formData.phone
      );
      alert("Đăng ký thành công!");
      setCurrentPage ? setCurrentPage("home") : navigate("/home");
    } catch (err) {
      setError(err.message || "Đăng ký thất bại!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="crystal-particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}>
              {i % 3 === 0 ? "❄️" : i % 3 === 1 ? "💎" : "✨"}
            </div>
          ))}
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-card register-card">
          <div className="auth-header">
            <div className="auth-logo">
              <span className="logo-icon">❄️</span>
              <span className="logo-text">FrozenKey</span>
            </div>
            <h2>Đăng ký</h2>
            <p>Tạo tài khoản mới để trải nghiệm</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="username">Tên người dùng *</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Nhập tên người dùng"
                  required
                />
                <div className="input-glow"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Nhập email"
                  required
                />
                <div className="input-glow"></div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Mật khẩu *</label>
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

              <div className="form-group">
                <label htmlFor="confirmPassword">Xác nhận mật khẩu *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Nhập lại mật khẩu"
                  required
                />
                <div className="input-glow"></div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Số điện thoại (tùy chọn)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Nhập số điện thoại"
              />
              <div className="input-glow"></div>
            </div>

            <div className="form-group file-upload">
              <label htmlFor="avatar">Avatar (tùy chọn)</label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={handleInputChange}
                />
                <div className="file-input-display">
                  <span className="file-icon">📷</span>
                  <span>
                    {formData.avatar
                      ? formData.avatar.name
                      : "Chọn ảnh đại diện"}
                  </span>
                </div>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                Tôi đồng ý với <a href="#terms">Điều khoản sử dụng</a> và{" "}
                <a href="#privacy">Chính sách bảo mật</a>
              </label>
            </div>
            {error && <div className="auth-error">{error}</div>}
            <button type="submit" className="auth-submit-btn">
              <span>Đăng ký</span>
              <div className="btn-crystals">
                <span>💎</span>
                <span>✨</span>
                <span>❄️</span>
              </div>
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Đã có tài khoản?
              <button
                className="switch-auth-btn"
                onClick={() =>
                  setCurrentPage ? setCurrentPage("login") : navigate("/login")
                }
              >
                Đăng nhập ngay
              </button>
            </p>
          </div>
        </div>

        <button
          className="back-home-btn"
          onClick={() =>
            setCurrentPage ? setCurrentPage("home") : navigate("/home")
          }
        >
          ← Về trang chủ
        </button>
      </div>
    </div>
  );
};

export default Register;
