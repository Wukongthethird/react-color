import React from "react";
import { Link } from "react-router-dom";

function Nav({colors}) {
  return (
    <div>
      {colors.map( (color) => (
        <Link key={ color.name + color.color } to="/colors/{color.name}" > {color.name} </Link>
      ))}
    </div>
  );
}

export default Nav;