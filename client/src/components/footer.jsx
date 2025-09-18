import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FrozenKey</h3>
            <p>
              Chuyên cung cấp key game và software bản quyền với giá tốt nhất
              thị trường.
            </p>
            <div className="social-links">
              <a href="#facebook">📘</a>
              <a href="#twitter">🐦</a>
              <a href="#discord">💬</a>
              <a href="#youtube">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Hỗ trợ</h4>
            <ul>
              <li>
                <a href="#contact">Liên hệ</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#guide">Hướng dẫn</a>
              </li>
              <li>
                <a href="#policy">Chính sách</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Danh mục</h4>
            <ul>
              <li>
                <a href="#games">Game</a>
              </li>
              <li>
                <a href="#software">Software</a>
              </li>
              <li>
                <a href="#education">Giáo dục</a>
              </li>
              <li>
                <a href="#business">Doanh nghiệp</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Liên hệ</h4>
            <p>📧 support@frozenkey.com</p>
            <p>📞 1900-xxxx</p>
            <p>📍 Việt Nam</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FrozenKey. All rights reserved.</p>
          <p>Thiết kế với ❄️ và 💎</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
