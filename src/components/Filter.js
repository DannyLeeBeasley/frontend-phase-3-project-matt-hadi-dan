import React from "react";

function Filter({ onCategoryChange }) {


  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by Category</option>
        <option value="fruits">Coffee</option>
        <option value="vegetables">Tea</option>
        <option value="dairy">Breakfast</option>
        <option value="sweeteners">Lunch</option>
        <option value="juices">Sweets</option>
      </select>
    </div>
  );
}

export default Filter;