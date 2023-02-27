import React, { useState } from 'react'
import './Contact.css'
import {  toast } from 'react-toastify';

const Contact = (props) => {

  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [message,setMessage] = useState('')

  const submitForm =(e)=>{
e.preventDefault()


toast.warning('Contact Us service will be available soon!', {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });
setEmail('')
setMessage('')
setName('')
  }
 
  return (
    <div className='contact' id={props.id}>
    <div className='contact-container'>
    <div className='contact-bgImage'>
    <img src="/images/home.png" alt="home" className='imageStyle' />
    </div>
    <div className="contact-name">
    <form className='form' >
    <div className='form-row'>
    <label>Fullname</label>
    <input
     className='input' 
     placeholder='Enter name' 
     type={'text'} 
    value={name}
    onChange={e=>setName(e.target.value)}
      />
    <span className='focus-border'></span>
    </div>
  
    <div className='form-row'>
    <label>Email</label>
    <input className='input'
    placeholder='Enter email'
    type={'email'} 
    value={email}
    onChange={e=>setEmail(e.target.value)}
    />
    <span className='focus-border'></span>
    </div>
    
    <div className='form-row'>
    <label>Message</label>
    <input className='input'
    placeholder='Enter message'
    type={'text'} 
    value={message}
    onChange={e=>setMessage(e.target.value)}
    />
    <span className='focus-border'></span>
    </div>
 <div className='buttonContainer'>
 <div className='button' onClick={submitForm}>
 <p style={{color:'#fff'}}>Submit</p>
 </div>
 </div>
   
    
    </form>
   
    </div>

    </div>
    <div className='contact-reach-out'>
    <h4>Contact Details</h4>
    <hr></hr>
    <p>asissingh4842@gmail.com</p>
    <p>+91 9876751571</p>

    </div>
    </div>
  )
}

export default Contact
