import React, { useState } from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {
const [modal,setModal] = useState(false)

const openMenu=()=>{
setModal(true)
}

const closeMenu=()=>{
  setModal(false)
  }

 

  return (
    <div className='container'>
    <div className='nav'>
    <div className='logo'>
    <Link  activeClass="active" smooth spy to="home">
    <img src='/images/a.png' alt='navImg' className='logoimg' />
    </Link>
    <div
    style={{
      marginRight:'10px'
    }}
    ></div>
   
    <Link  activeClass="active" smooth spy to="home">
    <h4><span className='firstName'>
    Asisinder
    </span>
    <span className='lastName'>
    Singh
    </span>
    </h4>
    </Link>

    </div>
    {modal?<div onClick={closeMenu} className='hamburger'>
    <img src='/images/close.png' alt='navImg' className='logoimg' />
    </div>:
    <div onClick={openMenu} className='hamburger'>
    <img src='/images/menu.png' alt='navImg' className='logoimg' />
    </div>
  }
    <div className='menu'>
    
   <ul className='menu-wrap'>
  
   <li className='link-holder'>
   <Link className='link'  activeClass="active" smooth spy to="home" >
   Home
   </Link>
   </li>
  
   <li>
   <Link className='link'  activeClass="active" smooth spy to="about" >
   About
   </Link>
   </li>

 

   <li>
   <Link className='link'   activeClass="active" smooth spy to="skills">
   Skills
   </Link>
   </li>

   <li>
   <Link className='link'  activeClass="active" smooth spy to="projects" >
   Projects
   </Link>
   </li>

   <li>
   <Link className='link'  activeClass="active" smooth spy to="contact" >
   Contact
   </Link>
   </li>
   </ul>
    </div>
    </div>

    {modal?
      <div className='modal'>
      <Link className='link'   activeClass="active" smooth spy to="home" onClick={closeMenu} >
      Home
      </Link>
      <Link className='link'  activeClass="active" smooth spy to="about" onClick={closeMenu} >
      About
      </Link>
      <Link className='link'   activeClass="active" smooth spy to="skills" onClick={closeMenu}>
      Skills
      </Link>
      <Link className='link'  activeClass="active" smooth spy to="projects" onClick={closeMenu}>
      Projects
      </Link>
      <Link className='link'  activeClass="active" smooth spy to="contact" onClick={closeMenu}>
      Contact
      </Link>
      
      
      </div>
      :null}
      
    </div>
  )
}

export default Navbar
