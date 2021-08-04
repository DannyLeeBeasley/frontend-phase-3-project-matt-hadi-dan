import React from "react";

function MenuItemCard({ menuItem }) {
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
                {/* <div className="content">
                    <div className="meta text-wrap">
                        <small>Price: ${menuItem.cost}</small>
                        <br></br>
                        <small>Calories: {menuItem.calories}</small>
                        <br></br>
                        <small>Protein: {menuItem.protein}</small>
                        <br></br>
                        <small>Fat: {menuItem.fat}</small>
                    </div>
                </div> */}
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