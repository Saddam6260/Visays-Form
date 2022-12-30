import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

import MenuBer from "./assets/component/Other_Page/Menuber"
import TopInputSet from "./assets/component/Other_Page/TopInputSet"
import MiddleInputSet from "./assets/component/Other_Page/MiddleInputSet"
import BottomInputSet from "./assets/component/Other_Page/BottomInputSet"
import Footer from "./assets/component/Other_Page/Footer"
import Form from "./assets/component/Form";

function App() {
  const [count, setCount] = useState(0);

  const menuItem = ["Insert", "Delete", "Update", "Report"]

  return (
    <div className="app">
      <MenuBer item={menuItem}/>
      <TopInputSet/>
      <MiddleInputSet/>
      <BottomInputSet/>
      <Footer/>
    </div>
  );
}

export default App;
