import React, { useState } from "react";

function MenuItemCard({ menuItem }) {

    const [isInCart, setIsInCart] = useState(true);

    function handleToggleStock(){
        setIsInCart(isInCart => !isInCart)
      }

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
                        {/* <br></br>
                        <small>Calories: {menuItem.calories}</small>
                        <br></br>
                        <small>Protein: {menuItem.protein}</small>
                        <br></br>
                        <small>Fat: {menuItem.fat}</small> */}
                    </div>
                </div>
                {isInCart ? (
                        <button className="primary" onClick={handleToggleStock}>Add To Cart</button>
                    ) : (
                        <button onClick={handleToggleStock}>Added To Cart</button>
                    )}
                {/* <div className="extra content">
                    <small>
                        Vitamins: {vitamins}
                    </small>
                    <br></br>
                    <small>
                        Minerals: {minerals}
                    </small>
                </div> */}
            </div>
        </div>
    )
}

export default MenuItemCard;