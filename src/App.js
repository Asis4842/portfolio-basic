


import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
   
      <ToastContainer />
    </div>
  );
}

export default App;
