import React, { useState } from "react";

function MenuItemCard({ menuItem, handleClick }) {

    const [isInCart, setIsInCart] = useState(true);

    function handleAddToCart() {
        setIsInCart(isInCart => !isInCart)
    }

    return (
        <div className="ui column">
            <div
                className="ui card"
                key={menuItem.id}
                onClick={() => handleClick(menuItem)}
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
                {isInCart ? (
                    <button className="primary" onClick={handleAddToCart}>Add To Cart</button>
                ) : (
                    <button onClick={handleAddToCart}>Added To Cart</button>
                )}
            </div>
        </div>
    )
}

export default MenuItemCard;