import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import Filter from "./Filter";


function Menu({ menuItems, handleClick, handleDeleteItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  let itemsToDisplay = menuItems.filter((menuItem) => {
    if (selectedCategory === "All") return true;

    return menuItem.category === selectedCategory;
  });

  return (
    <div>
      <div className="menu-items">
        <div className="ui segment menu-item-list">
          <div className="ui five column grid">
            <div className="row menu-item-list-row"></div>

            {/* <h3>Click Items To Add To Your Order</h3> */}

            <Filter onCategoryChange={handleCategoryChange} />
            {
              itemsToDisplay.map(menuItem => (
                <MenuItemCard key={menuItem.id} menuItem={menuItem} handleClick={handleClick} handleDeleteItem={handleDeleteItem} category={menuItem.category} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;