import React, { useEffect, useState } from "react";
import MenuItemList from "./MenuItemList";

function CafePage(){

    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/')
          .then((resp) => resp.json())
          .then(setMenuItems);
    }, []);

    return(
        <div>
            <MenuItemList
                menuItems = {menuItems}
            />
        </div>
    )
}

export default CafePage;