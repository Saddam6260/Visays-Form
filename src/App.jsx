import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import TopInputPage from "./assets/component/Other_Page/TopInputPage"
import Form from "./assets/component/Form";

function App() {
  const [count, setCount] = useState(0)

  const menuItem = ["Insert", "Delete", "Update", "Report"]

  return (
    <div className='app'>
      <TopInputPage item={menuItem}/>
      {/* <Form /> */}
    </div>
  )
}

export default App
