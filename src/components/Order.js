import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import Popup from './Popup';

function Order({ order, handleClick }) {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  var totalPrice = order.reduce(function (prev, cur) {
    return prev + cur.cost;
  }, 0);

  var allOrderItems = order.reduce(function (prev, cur) {
    return prev + cur.name + '. ';
  }, []);

  return (
    <div className="your-order">

      <div className="ui segment order-item-list">
        <div className="ui five column grid">
          <div className="row order-item-list-row">

            {order.length !== 0 ?
              <div className="yours"><h1>My Order</h1></div>
              : <div><h1>You Have Not Added Any Items To Your Order</h1></div>
            }
            {
              order.map(menuItem => (
                <MenuItemCard key={menuItem.id} menuItem={menuItem} handleClick={handleClick} />
              ))
            }
            <div>
            </div>
          </div>
        </div>
      </div>
      {order.length !== 0 ?
        <div>
          <input
            type="button"
            value="Place My Order!"
            className="place-order"
            style={{ textAlign: "center" }}
            // onFocus={start}
            onClick={togglePopup}
          />
          {isOpen && <Popup
            content={<>
              <img className="placing-order" src="" alt="Placing Order" />
              <h4>Your Order:</h4>
              <h2>Ingredients: {allOrderItems}</h2>
              <h2>Order Total: ${totalPrice}</h2>
            </>}
            handleClose={togglePopup}
          />}
        </div>
        : null}
    </div>
  )
}

export default Order;