import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = (props) => {

  const displayName=['Asisinder','Frontend-Developer'];
  const [arrayIndex,setArrayIndex] = useState(0)
  const [isDeleting,setIsDeleting] = useState(false)
  const [text,setText] = useState('')
  const [delta,setDelta] = useState(300-Math.random()*100)
  const period = 2000;

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick();
    },delta)

    return ()=>{
      clearInterval(ticker)
    }

  },[text])

  const tick =()=>{
    let i=arrayIndex % displayName.length
    let fullText=displayName[i]
    let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)

    setText(updatedText)
    if(isDeleting){
      setDelta(prevData=>prevData/2)
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting && updatedText===''){
        setIsDeleting(false)
        setArrayIndex(arrayIndex+1)
        setDelta(500)
    }
  }

  return (
    <div className='home' id={props.id}>
      <div className='home-container'>
      <div className='home-bgImage'>
      <img src="/images/home.png" alt="home" className='imageStyle' />
      </div>
      <div className="home-name">
      <p className='welcome'>Welcome to my <span className='port'>Portfolio</span></p>
      <p className='my'>I am <span className='title'>{text}</span></p>
      <p className='desc'> I am passionate about creating intuitive, engaging and visually appealing user experiences. With over 1 year of experience in frontend development working in technologies like Reactjs & React Native.</p>
      </div>

      </div>
    </div>
  )
}

export default Home
