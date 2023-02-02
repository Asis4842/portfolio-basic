import React, { useState } from 'react'
import './Skills.css'

const Skills = (props) => {
  const [flipped,setFlipped] = useState(false)
  const [flipped2,setFlipped2] = useState(false)
  const [flipped3,setFlipped3] = useState(false)

const handleFlip=()=>{

setFlipped(!flipped)

}
const handleFlip2=()=>{

  setFlipped2(!flipped2)
  
  }
  const handleFlip3=()=>{

    setFlipped3(!flipped3)
    
    }
  

  return (
    <div className='skill' id={props.id}>
      <div className='skill-container'>
      <div onClick={handleFlip} className={`flip-card ${flipped?'flipIt':''}`}>
        <div className='front-card'>
        <p className='front-text'> REACT-JS</p>
       
        </div>

        <div className='back-card'>
        <p className='back-text'>
        Skill 1
        </p>
        <p className='back-desc'>Tap to reveal</p>
        </div>
        </div>

        <div onClick={handleFlip2} className={`flip-card ${flipped2?'flipIt':''}`}>
        <div className='front-card'>
        <p className='front-text'> REACT NATIVE</p>
        </div>

        <div className='back-card'>
        <p className='back-text'>
        Skill 2
        </p>
        <p className='back-desc'>Tap to reveal</p>
        </div>
        </div>

        <div onClick={handleFlip3} className={`flip-card ${flipped3?'flipIt':''}`}>
        <div className='front-card'>
        <p className='front-text'> JAVASCRIPT</p>
        </div>

        <div className='back-card'>
        <p className='back-text'>
        Skill 3
        </p>
        <p className='back-desc'>Tap to reveal</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
