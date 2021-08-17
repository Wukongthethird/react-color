import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Color from "./Color";
import ColorForm from "./ColorForm";

function Routes({ colors, addColor }) {
  return (
    <Switch>
      <Route exact path="/colors/new">
       <ColorForm addColor={addColor} />
      </Route>
      <Route exact path="/colors/:color" >
        <Color colors={colors}/>
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;