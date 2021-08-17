import React from "react";
import { Link } from "react-router-dom";

function ColorsHomePage({colors}) {
  return (
    <div>
      <Link to="/colors/new">Add a color</Link>
      {colors.map( (color) => (
       <Link key={ color.name + color.color } to={`/colors/${color.name}`} > {color.name} </Link>
      ))}
    </div>
  );
}

export default ColorsHomePage;