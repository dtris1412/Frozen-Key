import React, { useState } from "react";
import Banner from "../components/banner";
import CategoryBar from "../components/categoryBar";
import FilterBar from "../components/filterBar";
import ProductCard from "../components/productCard";
import "../styles/home.css";

const Home = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState("game");
  const [filters, setFilters] = useState({});
  const [cartItems, setCartItems] = useState([]);

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Cyberpunk 2077",
      category: "Action RPG",
      platform: "Steam",
      price: 1200000,
      originalPrice: 2000000,
      image: "/assets/product_images/cyberpunk.png",
      isHot: true,
      discount: 40,
      reviews: 1250,
    },
    {
      id: 2,
      name: "Elden Ring",
      category: "Action RPG",
      platform: "Steam",
      price: 1500000,
      image: "/assets/product_images/elden_ring_dlc.png",
      isNew: true,
      reviews: 890,
    },
    {
      id: 3,
      name: "God of War",
      category: "Action Adventure",
      platform: "Steam",
      price: 1000000,
      originalPrice: 1500000,
      image: "/assets/product_images/elden_ring_dlc.png",
      discount: 33,
      reviews: 2100,
    },
    {
      id: 4,
      name: "Spider-Man Remastered",
      category: "Action Adventure",
      platform: "Steam",
      price: 1300000,
      image:
        "https://images.pexels.com/photos/163036/mario-luigi-figures-funny-163036.jpeg",
      isHot: true,
      reviews: 1800,
    },
    {
      id: 5,
      name: "Microsoft Office 365",
      category: "Productivity",
      platform: "Microsoft",
      price: 2500000,
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
      reviews: 3200,
    },
    {
      id: 6,
      name: "Adobe Creative Cloud",
      category: "Creative Software",
      platform: "Adobe",
      price: 5000000,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      reviews: 1500,
    },
    {
      id: 7,
      name: "Windows 11 Pro",
      category: "Operating System",
      platform: "Microsoft",
      price: 3500000,
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
      isNew: true,
      reviews: 900,
    },
    {
      id: 8,
      name: "Antivirus Premium",
      category: "Security",
      platform: "Kaspersky",
      price: 800000,
      originalPrice: 1200000,
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      discount: 33,
      reviews: 2800,
    },
  ];

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log("Added to cart:", product.name);
  };

  const filteredProducts = products.filter((product) => {
    // Category filter
    if (
      activeCategory === "game" &&
      !["Action RPG", "Action Adventure"].includes(product.category)
    )
      return false;
    if (
      activeCategory === "work" &&
      !["Productivity", "Operating System"].includes(product.category)
    )
      return false;
    if (
      activeCategory === "utilities" &&
      !["Security", "Creative Software"].includes(product.category)
    )
      return false;

    // Price filter
    if (filters.priceRange) {
      const ranges = {
        under500k: { min: 0, max: 500000 },
        "500k-1m": { min: 500000, max: 1000000 },
        "1m-2m": { min: 1000000, max: 2000000 },
        over2m: { min: 2000000, max: 999999999 },
      };
      const range = ranges[filters.priceRange];
      if (product.price < range.min || product.price > range.max) return false;
    }

    // Platform filter
    if (filters.platform && product.platform !== filters.platform) return false;

    // Hot filter
    if (filters.isHot && !product.isHot) return false;

    // New filter
    if (filters.isNew && !product.isNew) return false;

    return true;
  });

  return (
    <div className="home">
      <Banner />
      <CategoryBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <FilterBar filters={filters} setFilters={setFilters} />

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Sản phẩm nổi bật</h2>
            <p>Khám phá những sản phẩm chất lượng với giá tốt nhất</p>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <div className="no-products-content">
                <span className="no-products-icon">🔍</span>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Hãy thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
