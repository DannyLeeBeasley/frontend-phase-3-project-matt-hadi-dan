import React from "react";
import MenuItemCard from "./MenuItemCard";

function MenuItemList({menuItems}) {
  return (
    <ul className="cards">{
      menuItems.map((menuItem) => {
        return(
          <MenuItemCard
          key={menuItem.id}
          menuItem={menuItem}
        />
        )
      })
      }</ul>
  );
}

export default MenuItemList;