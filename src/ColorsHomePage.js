import React from "react";
import { Link } from "react-router-dom";

function ColorsHomePage({colors}) {
  return (
    <div>
      {colors.map( (color) => (
        <Link to="/colors/{color.name}" > {color.name} </Link>
      ))}
    </div>
  );
}

export default ColorsHomePage;