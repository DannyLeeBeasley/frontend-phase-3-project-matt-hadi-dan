import React, { useState } from "react";


function NewMenuItemForm({ addNewMenuItem }) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/menu', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
        category: category
      }),
    })
    .then(res => res.json())
    .then(newMenuItem => addNewMenuItem(newMenuItem));
  }

  return (
    <div className="new-menu-item-form">
      <h2>Add New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Item name" 
          value={name} 
          onChange={(e) => {setName(e.target.value)}}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL"
          value={image}
          onChange={(e) => {setImage(e.target.value)}} 
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          value={price}
          onChange={(e) => {setPrice(parseFloat(e.target.value))}}
        />
        <input 
          type="text" 
          name="category"  
          placeholder="category"
          value={category}
          onChange={(e) => {setCategory(e.target.value)}}
        />
        <button type="submit">Add New Menu Item</button>
      </form>
    </div>
  );
}

export default NewMenuItemForm;