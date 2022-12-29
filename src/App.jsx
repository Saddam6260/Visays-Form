import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from "./assets/component/Form"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Form />
    </div>
  )
}

export default App
