import React from 'react'
import './Contact.css'

const Contact = (props) => {
  return (
    <div className='contact' id={props.id}>
    <div className='contact-container'>
    <div className='contact-bgImage'>
    <img src="/images/home.png" alt="home" className='imageStyle' />
    </div>
    <div className="contact-name">
    <form className='form'>
    <div className='form-row'>
    <label>Fullname</label>
    <input />
    </div>
  
    <div className='form-row'>
    <label>Email</label>
    <input />
    </div>
    
    <div className='form-row'>
    <label>Message</label>
    <input />
    </div>

    <div className='button'>
    <p style={{color:'#fff'}}>Contact us</p>
    </div>
    
    </form>
   
    </div>

    </div>
    </div>
  )
}

export default Contact
