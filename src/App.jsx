import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Menuber from "./assets/component/Menuber";
import Form from "./assets/component/Form";

function App() {
  const [count, setCount] = useState(0)

  const menuItem = ["Insert", "Delete", "Update", "Report"]

  return (
    <div className='app'>
      <Menuber item={menuItem}/>
      {/* <Form /> */}
    </div>
  )
}

export default App
