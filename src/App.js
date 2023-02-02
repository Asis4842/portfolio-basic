

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <div className="App">
    <Navbar />
       <Home id={'home'} />
       <About id={'about'} />
    <Skills id={'skills'}/>
       <Projects id={'projects'}/>
       <Contact id={'contact'}/>
   
      
    </div>
  );
}

export default App;
