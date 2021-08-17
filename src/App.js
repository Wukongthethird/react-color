import './App.css';
import React , {useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ColorsHomePage from './ColorsHomePage';

function App({colors}) {
  const [colorsList, setColorsList] = useState(colors);

  function addColor(newColor) {
    console.log("NEWCOLOR", newColor);
    setColorsList((c) => ({
      ...c,
      newColor
    }))
    console.log("COLORS", colorsList);
  }

  return (
    <div className="App">
     <BrowserRouter>
      <ColorsHomePage colors={colorsList} />
      <Routes colors={colorsList} addColor={addColor}/>
     </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colors:[
    {name:"red" , color:"#FF0000"},
    {name:"pink" , color:"#FFC0CB"},
    {name:"green" , color:"#00FF00"}
  ]
}


export default App;
