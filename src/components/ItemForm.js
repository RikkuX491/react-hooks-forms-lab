import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const {onItemFormSubmit} = props

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleItemNameChange(event){
    setItemName(event.target.value)
  }

  function handleItemCategoryChange(event){
    setItemCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }

    onItemFormSubmit(newItem)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleItemNameChange} type="text" name="name" value={itemName}/>
      </label>

      <label>
        Category:
        <select onChange={handleItemCategoryChange} name="category" value={itemCategory}>
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
