import React, { useEffect, useState } from "react";
import WelcomePage from "./WelcomePage";
import Order from "./Order";
import Menu from "./Menu";
import { Route, Switch } from 'react-router';

function CafePage(){

    const [menuItems, setMenuItems] = useState([]);
    const [order, setOrder] = useState([]);

    const addToCart = (menuItem) => {
        const newOrder = [...order, menuItem];
        setOrder(newOrder); 
    }
    
    const removeFromOrder = (menuItem) => {
        const updatedOrder = [...order].filter((itemToRemove) => itemToRemove.id !== menuItem.id)
        setOrder(updatedOrder)
      }

    useEffect(() => {
        fetch('http://localhost:9292/menu')
          .then((resp) => resp.json())
          .then(setMenuItems);
    }, []);

    return(
        <div>
            <Switch>
            <Route exact path="/" component={
                () => <WelcomePage/>}/>
            <Route exact path="/menu" component={
                () => <Menu menuItems = {menuItems} handleClick = {addToCart} order = {order} setOrder = {setOrder}/>}/>
            <Route exact path ="/order" component={
                () => <Order order = {order} handleClick = {removeFromOrder}/>}/>
            </Switch>
        </div>
    )
}

export default CafePage;