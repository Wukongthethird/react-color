import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";

function Color({ colors }) {
  const { color } = useParams();
  let aColor = colors.filter(c => c.name === color)[0];

  let style = {
    backgroundColor: aColor.color
  }

  return (
    <div className="color" style={style}>
      <h1>This is {aColor.name}</h1>
      <h2>Isn't It Beautiful!?</h2>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default Color;
