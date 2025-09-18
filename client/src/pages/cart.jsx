import React, { useState } from "react";
import "../styles/cart.css";

const Cart = ({ setCurrentPage }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cyberpunk 2077",
      platform: "Steam",
      price: 1200000,
      quantity: 1,
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    },
    {
      id: 2,
      name: "Elden Ring",
      platform: "Steam",
      price: 1500000,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    },
    {
      id: 3,
      name: "Microsoft Office 365",
      platform: "Microsoft",
      price: 2500000,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = promoCode === "FROZEN20" ? subtotal * 0.2 : 0;
  const total = subtotal - discount;

  const handleCheckout = () => {
    alert("Chuyển hướng đến trang thanh toán...");
  };

  return (
    <div className="cart-container">
      <div className="container">
        <div className="cart-header">
          <h1>🛒 Giỏ hàng của bạn</h1>
          <button className="back-btn" onClick={() => setCurrentPage("home")}>
            ← Tiếp tục mua sắm
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-content">
              <span className="empty-icon">🛒</span>
              <h2>Giỏ hàng trống</h2>
              <p>Hãy thêm một số sản phẩm vào giỏ hàng để tiếp tục</p>
              <button
                className="shop-now-btn"
                onClick={() => setCurrentPage("home")}
              >
                Mua sắm ngay
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-items-header">
                <h2>Sản phẩm ({cartItems.length})</h2>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-platform">{item.platform}</p>
                    <span className="item-price">
                      {item.price.toLocaleString()} VNĐ
                    </span>
                  </div>

                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      🗑️
                    </button>
                  </div>

                  <div className="item-total">
                    {(item.price * item.quantity).toLocaleString()} VNĐ
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Tóm tắt đơn hàng</h3>

                <div className="promo-section">
                  <input
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="promo-input"
                  />
                  <button className="apply-promo-btn">Áp dụng</button>
                  {promoCode === "FROZEN20" && (
                    <div className="promo-success">
                      ✅ Mã giảm giá 20% đã được áp dụng!
                    </div>
                  )}
                </div>

                <div className="summary-details">
                  <div className="summary-row">
                    <span>Tạm tính:</span>
                    <span>{subtotal.toLocaleString()} VNĐ</span>
                  </div>

                  {discount > 0 && (
                    <div className="summary-row discount">
                      <span>Giảm giá:</span>
                      <span>-{discount.toLocaleString()} VNĐ</span>
                    </div>
                  )}

                  <div className="summary-row total">
                    <span>Tổng cộng:</span>
                    <span>{total.toLocaleString()} VNĐ</span>
                  </div>
                </div>

                <button className="checkout-btn" onClick={handleCheckout}>
                  <span>Thanh toán</span>
                  <span>💎</span>
                </button>

                <div className="payment-methods">
                  <p>Chúng tôi chấp nhận:</p>
                  <div className="payment-icons">
                    <span>💳</span>
                    <span>🏦</span>
                    <span>📱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
