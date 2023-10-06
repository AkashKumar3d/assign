import { useState } from 'react'
import './App.css'
import Tab from "./components/Tab";
import Drawer from './components/Drawer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tab />
      <Drawer/> 
      
    </>
  )
}

export default App
