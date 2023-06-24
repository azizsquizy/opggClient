import React from 'react'
import "./App.css"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Champions from './pages/Champions'
import Champion from './pages/Champion'
import Home from './pages/Home'
import Search from './components/Search'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
     <div className="img">
     <img src='https://opgg-static.akamaized.net/logo/20230619151800.5dbc04a84ff24dfdade19c10c0b2de4e.png?image=q_auto,f_webp,w_auto&v=1687251121630'/>
     </div>
      <Routes>
        
        <Route path="/" element = {<Home/>}/>
        <Route path="/champion" element = {<Champion/>}/>
        <Route path="/champions" element = {<Champions/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App