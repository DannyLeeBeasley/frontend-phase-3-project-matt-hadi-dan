import React, { useEffect, useState } from "react";
// import WelcomePage from "./WelcomePage";
import Order from "./Order";
import Menu from "./Menu";
import NewMenuItemForm from "./NewMenuItemForm";
// import { Route, Switch } from 'react-router';

function CafePage(){

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
      fetch('http://localhost:9292/menu')
        .then((resp) => resp.json())
        .then(menu => setMenuItems(menu));
  }, []);

  const addNewMenuItem = (menuItem) => {
        const newMenu = [...menuItems, menuItem];
        setMenuItems(newMenu); 
    }

  const handleDeleteItem = (itemToRemove) => {
    fetch(`http://localhost:9292/reviews/${itemToRemove.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {const updatedMenu = menuItems.filter((menuItem) => {
        if(menuItem.id !== itemToRemove.id)
        return true;
        }
      )
      setMenuItems(updatedMenu);}
    )
  } 

  return(
    <div>
      {/* <WelcomePage/> */}
       <NewMenuItemForm 
        addNewMenuItem={addNewMenuItem}
      />
      {/* <Search 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      /> */}
      <Menu 
        menuItems = {menuItems}
        handleDelteItem = {handleDeleteItem}
      />
    </div>
)
}

export default CafePage;
  
//  {/* <Switch>
//         <Route exact path="/" component={
//             () => <WelcomePage/>}/>
//         <Route exact path="/menu" component={
//             () => <NewMenuItem menuItems = {menuItems} handleClick = {addToCart} order = {order} setOrder = {setOrder}/>}/>    
//         <Route exact path="/menu" component={
//             () => <Menu menuItems = {menuItems} handleClick = {addToCart} order = {order} setOrder = {setOrder}/>}/>

//         {/* <Route exact path ="/order" component={
//             () => <Order order = {order} handleClick = {removeFromOrder}/>}/> */}
//           // </Switch> */}
//     // // const [order, setOrder] = useState([]);

//     // // const addToCart = (menuItem) => {
//     // //     const newOrder = [...order, menuItem];
//     // //     setOrder(newOrder); 
//     // // }

//     // function addToCart(menuItem) {
//     //       e.preventDefault();
//     //       fetch("http://localhost:9292/menu", {
//     //         method: "POST",
//     //         headers: {
//     //           "Content-Type": "application/json",
//     //         },
//     //         body: JSON.stringify({
//     //           name: name,
//     //           price: price,
//     //           image: image,
//     //           category: category,
//     //         }),
//     //       })
//     //         .then((r) => r.json())
//     //         .then((newMenuItem =>  setMenuItems([...order, newMenuItem]);
//     //     }
//     //     // return <form onSubmit={handleSubmit}>{/* controlled form code here*/}</form>;
//     //   }
    
//     // // const removeFromOrder = (menuItem) => {
//     // //     const updatedOrder = [...order].filter((itemToRemove) => itemToRemove.id !== menuItem.id)
//     // //     setOrder(updatedOrder)
//     // //   }

    