import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './global.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Main from './components/Main'
import Charts from './components/Charts'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
    <Navbar/>
    <Cards/>
    <Main/>
    <Charts/>
    <Footer/>
  </>
  )
}

export default App
