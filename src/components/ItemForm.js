import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const { onItemFormSubmit } = props

  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleSubmit(event){
    event.preventDefault()

    const newItem = {
      id: uuid(),
      name: name,
      category: category
    }

    onItemFormSubmit(newItem)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} />
      </label>

      <label>
        Category:
        <select onChange={(e) => setCategory(e.target.value)} name="category" value={category}>
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
