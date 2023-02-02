import React from 'react'
import './Projects.css'

const Projects = (props) => {
  return (
    <div className='project' id={props.id}>
    <p className='project-sub'>Some of my recent</p>
    <h2 className='project-title'>PROJECTS</h2>
      <div className='project-container'>

      <div className='project-slider'>
     { [1,2,3,4,5,6,7,8].map((item,index)=>{
      return(
        <div className='project-card'>
        <img />
        </div>
      )
     })}
      </div>
      
      </div>
    </div>
  )
}

export default Projects
