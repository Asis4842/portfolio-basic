import React, { useState } from 'react'
import './Skills.css'
import ReactCardFlip from 'react-card-flip';

const Skills = (props) => {
  const [flipped,setFlipped] = useState(false)
  const [flipped2,setFlipped2] = useState(false)


const handleFlip=()=>{

setFlipped(!flipped)

}
const handleFlip2=()=>{

  setFlipped2(!flipped2)
  
  }
  

  return (
    <div className='skill' id={props.id}>
      <div className='skill-container'>
      <div onClick={handleFlip} className={`flip-card ${flipped?'flipIt':''}`}>
        <div className='front-card'>
        REACT-JS
        </div>

        <div className='back-card'>
        Skill 1
        </div>
        </div>

        <div onClick={handleFlip2} className={`flip-card ${flipped2?'flipIt':''}`}>
        <div className='front-card'>
        REACT NATIVE
        </div>

        <div className='back-card'>
        Skill 2
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
