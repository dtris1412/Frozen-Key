import React from "react";
import "../styles/banner.css";

const Banner = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Cyberpunk 2077",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      price: "1,200,000 VNĐ",
    },
    {
      id: 2,
      name: "Elden Ring",
      image:
        "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      price: "1,500,000 VNĐ",
    },
    {
      id: 3,
      name: "God of War",
      image:
        "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg",
      price: "1,000,000 VNĐ",
    },
    {
      id: 4,
      name: "Spider-Man",
      image:
        "https://images.pexels.com/photos/163036/mario-luigi-figures-funny-163036.jpeg",
      price: "1,300,000 VNĐ",
    },
    {
      id: 5,
      name: "Hogwarts Legacy",
      image:
        "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg",
      price: "1,100,000 VNĐ",
    },
    {
      id: 6,
      name: "FIFA 2024",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      price: "900,000 VNĐ",
    },
  ];

  return (
    <section className="banner">
      <div className="container">
        <div className="banner-layout">
          {/* Left Side Products */}
          <div className="banner-side left">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <div key={product.id} className={`banner-item item-${index + 1}`}>
                <img src={product.image} alt={product.name} />
                <div className="item-overlay">
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Banner */}
          <div className="banner-center">
            <div className="main-banner">
              <div className="banner-content">
                <h1>🎮 MEGA SALE 2024</h1>
                <h2>Giảm giá lên đến 70%</h2>
                <p>Hàng ngàn game và software bản quyền</p>
                <button className="cta-button">
                  <span>Khám phá ngay</span>
                  <div className="button-glow"></div>
                </button>
              </div>
              <div className="banner-decoration">
                <div className="crystal crystal-1">💎</div>
                <div className="crystal crystal-2">❄️</div>
                <div className="crystal crystal-3">✨</div>
              </div>
            </div>
          </div>

          {/* Right Side Products */}
          <div className="banner-side right">
            {featuredProducts.slice(3, 6).map((product, index) => (
              <div key={product.id} className={`banner-item item-${index + 4}`}>
                <img src={product.image} alt={product.name} />
                <div className="item-overlay">
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
