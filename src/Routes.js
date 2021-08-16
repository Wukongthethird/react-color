import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function Routes({ colors }) {
  return (
    <Switch>
  
      <Redirect to="/colors" />
    </Switch>
  );
}
/* <Route path="/colors/new" >
<ColorForm dogs={dogs}/>
</Route> */
/* <Route exact path="/colors/:color" >
<Color color={colors}/>
</Route> */

export default Routes;