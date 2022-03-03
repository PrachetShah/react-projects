import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
      {/* <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        BreakFast
      </button> */}
    </div>
  );
};

export default Categories;
