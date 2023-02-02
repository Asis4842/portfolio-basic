

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';

const MainApp=()=>{
  return(
    <div id='/'>
    <Navbar />
    <Home id={'home'} />
    <About id={'about'} />
 <Skills id={'skills'}/>
    <Projects id={'projects'}/>
    <Contact id={'contact'}/>
    </div>
  )
}

const App=()=> {
  return (
    <div className="App">
  
  <MainApp/>
   
      
    </div>
  );
}

export default App;
