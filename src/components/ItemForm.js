import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from "react";

function ItemForm(props) {

  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  const {onItemFormSubmit} = props

  function handleSubmit(event){
    event.preventDefault()
    
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }

    onItemFormSubmit(newItem)
  }

  function updateItemName(event){
    setItemName(event.target.value)
  }

  function updateItemCategory(event){
    setItemCategory(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={updateItemName} type="text" name="name" value={itemName} />
      </label>

      <label>
        Category:
        <select onChange={updateItemCategory} name="category" value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
