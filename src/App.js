import './App.css';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import NewProducts from './components/NewProducts';
import TopBar from './components/TopBar';
import FooterComponent from './components/FooterComponent';
import NavbarMenu from './components/NavbarMenu';
import { useState } from 'react';
function App() {
  const[isMenu,setMenu]=useState(true);
  const handleClick=()=>{
    setMenu(!isMenu);
  }
  return (
    <div className="App">
        
        {isMenu?<TopBar/>:<div></div>}
        {isMenu?<Home flag={isMenu} handleMenu={handleClick} />:<div></div>}
        {isMenu?<NewProducts/>:<div></div>}
        {isMenu?<ContactUs/>:<div></div>}
        {isMenu?<FooterComponent/>:<div></div>}
        {isMenu?<div></div>:<NavbarMenu flag={isMenu} handleMenu={handleClick}/>}
    </div>
  );
}

export default App;
