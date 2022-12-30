import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MenuBer from "./assets/component/Other_Page/Menuber";
import TopInputSet from "./assets/component/Other_Page/TopInputSet"
import Form from "./assets/component/Form";

function App() {
  const [count, setCount] = useState(0);

  const menuItem = ["Insert", "Delete", "Update", "Report"];

  const labelName = [
    "VISYS_DC_ID",
    "VISYS_DC_LOCATION",
    "VISYS_DC_URL",
    "VISYS_DC_PORT",
    "VISYS_DC_STATUS",
    "VISYS_DC_FLAG",
  ];

  return (
    <div className="app">
      <MenuBer item={props.item} />
      <TopInputSet labelItem={labelName}/>
    </div>
  );
}

export default App;
