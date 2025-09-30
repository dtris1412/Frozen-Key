import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import CategoryBar from "../components/categoryBar";
import FilterBar from "../components/filterBar";
import ProductCard from "../components/productCard";
import axios from "axios"; // import trực tiếp
import "../styles/home.css";

const Home = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [filters, setFilters] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]); // lấy từ API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gọi API lấy products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:8080/api/products");
        setProducts(res.data); // API trả về mảng sản phẩm
      } catch (err) {
        setError("Không thể tải sản phẩm, vui lòng thử lại!");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log("Added to cart:", product.name);
  };

  // Lọc sản phẩm
  const filteredProducts = products.filter((product) => {
    if (activeCategory === "game" && product.type !== "game") return false;
    if (activeCategory === "software" && product.type !== "software")
      return false;
    if (activeCategory === "dlc" && product.type !== "dlc") return false;

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

    if (filters.platform && product.platform !== filters.platform) return false;
    if (filters.isHot && !product.isHot) return false;
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

          {loading && <p>Đang tải sản phẩm...</p>}
          {error && <p className="error">{error}</p>}

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {!loading && filteredProducts.length === 0 && (
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
