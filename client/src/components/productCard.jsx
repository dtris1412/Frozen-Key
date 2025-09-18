import React from "react";
import "../styles/productCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const handleBuyNow = () => {
    onAddToCart(product);
    // Có thể thêm thông báo hoặc chuyển hướng
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          {product.isHot && <span className="badge hot">🔥 Hot</span>}
          {product.isNew && <span className="badge new">✨ New</span>}
          {product.discount && (
            <span className="badge discount">-{product.discount}%</span>
          )}
        </div>
        <div className="product-actions">
          <button className="quick-view">👁️</button>
          <button className="add-wishlist">❤️</button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-count">({product.reviews || 0})</span>
        </div>
        <div className="product-platform">
          <span className="platform-badge">{product.platform}</span>
        </div>
      </div>

      <div className="product-footer">
        <div className="product-price">
          {product.originalPrice && (
            <span className="original-price">
              {product.originalPrice.toLocaleString()} VNĐ
            </span>
          )}
          <span className="current-price">
            {product.price.toLocaleString()} VNĐ
          </span>
        </div>
        <button className="buy-now-btn" onClick={handleBuyNow}>
          <span>Mua ngay</span>
          <div className="btn-glow"></div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
