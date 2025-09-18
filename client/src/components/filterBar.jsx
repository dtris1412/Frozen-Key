import React, { useState } from "react";
import "../styles/filterBar.css";

const FilterBar = ({ filters, setFilters }) => {
  const [showPriceFilter, setShowPriceFilter] = useState(false);

  const priceRanges = [
    { id: "under500k", label: "Dưới 500k", min: 0, max: 500000 },
    { id: "500k-1m", label: "500k - 1M", min: 500000, max: 1000000 },
    { id: "1m-2m", label: "1M - 2M", min: 1000000, max: 2000000 },
    { id: "over2m", label: "Trên 2M", min: 2000000, max: 999999999 },
  ];

  const platforms = ["Steam", "Epic Games", "Origin", "Uplay", "Battle.net"];

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? null : value,
    }));
  };

  return (
    <section className="filter-bar">
      <div className="container">
        <div className="filter-content">
          <div className="filter-group">
            <span className="filter-label">Lọc theo:</span>
          </div>

          <div className="filter-group price-filter">
            <button
              className="filter-btn"
              onClick={() => setShowPriceFilter(!showPriceFilter)}
            >
              💰 Giá {showPriceFilter ? "▲" : "▼"}
            </button>
            {showPriceFilter && (
              <div className="dropdown-filter">
                {priceRanges.map((range) => (
                  <label key={range.id} className="filter-option">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={filters.priceRange === range.id}
                      onChange={() =>
                        handleFilterChange("priceRange", range.id)
                      }
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-group">
            <select
              className="filter-select"
              value={filters.platform || ""}
              onChange={(e) => handleFilterChange("platform", e.target.value)}
            >
              <option value="">🎯 Tất cả nền tảng</option>
              {platforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <button
              className={`filter-btn ${filters.isHot ? "active" : ""}`}
              onClick={() => handleFilterChange("isHot", true)}
            >
              🔥 Hot
            </button>
          </div>

          <div className="filter-group">
            <button
              className={`filter-btn ${filters.isNew ? "active" : ""}`}
              onClick={() => handleFilterChange("isNew", true)}
            >
              ✨ Mới
            </button>
          </div>

          <div className="filter-group">
            <select
              className="filter-select"
              value={filters.sortBy || ""}
              onChange={(e) => handleFilterChange("sortBy", e.target.value)}
            >
              <option value="">🔄 Sắp xếp</option>
              <option value="price-asc">Giá: Thấp đến cao</option>
              <option value="price-desc">Giá: Cao đến thấp</option>
              <option value="name-asc">Tên: A-Z</option>
              <option value="popular">Phổ biến</option>
              <option value="newest">Mới nhất</option>
            </select>
          </div>

          {(filters.priceRange ||
            filters.platform ||
            filters.isHot ||
            filters.isNew) && (
            <button className="clear-filters" onClick={() => setFilters({})}>
              🗑️ Xóa bộ lọc
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
