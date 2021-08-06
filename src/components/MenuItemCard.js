import React, { useState } from "react";

function MenuItemCard({ menuItem, handleClick, handleDeleteItem}) {

    // const [isInCart, setIsInCart] = useState(true);

    // function handleAddToOrder() {
    //     setIsInCart(isInCart => !isInCart)

    // }

    return (
        <div className="ui column">
            <div
                className="ui card"
                key={menuItem.id}
                // onClick={() => handleClick(menuItem)}
            >
                <div className="header">
                    <h2>{menuItem.name}</h2>
                </div>
                <div className="pic" >
                    <img alt="pic" src={menuItem.image} />
                </div>
                <div className="content">
                    <div className="meta text-wrap">
                        <small>Price: ${menuItem.price}</small>
                    </div>
                </div>
                <button onClick={handleDeleteItem}>Remove Item</button>
                {/* {isInCart ? (
                    <button className="primary" onClick={handleClick}>Add To Cart</button>
                ) : (
                    <button>Added To Cart</button>
                )} */}
            </div>
        </div>
    )
}

export default MenuItemCard;