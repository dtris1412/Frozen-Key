import React, { useState } from "react";
import "../styles/categoryBar.css";

const CategoryBar = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: "game", name: "Game", icon: "🎮" },
    { id: "education", name: "Học tập", icon: "📚" },
    { id: "work", name: "Làm việc", icon: "💼" },
    { id: "utilities", name: "Tiện ích", icon: "🔧" },
    { id: "ai", name: "AI", icon: "🤖" },
  ];

  return (
    <section className="category-bar">
      <div className="container">
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
