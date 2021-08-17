import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ColorForm({ addColor }) {
  const [color, setColor] = useState({});
  const history = useHistory();

  function handleChange(evt) {
    let { name, value } = evt.target
    setColor((c) => ({
      ...c,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addColor(color);
    history.push("/colors");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">Color Name: </label>
        <input 
          type="text"
          name="name"
          onChange={handleChange} />
        <label for="color">Color Value: </label>
        <input
          type="color"
          name="color"
          onChange={handleChange} />
        <button>Add color</button>
      </form>
    </div>
  );
}

export default ColorForm;