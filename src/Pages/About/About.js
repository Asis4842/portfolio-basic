import React from 'react'
import AboutCard from '../../Components/AboutCard/AboutCard'
import './About.css'

const About = (props) => {
  return (
    <div className='about' id={props.id}>
      <div className='about-container'>
        <div className='education'>
        <div className='education-head'>
        <h2>Education</h2>
        </div>
        <div className='education-body'>
        <AboutCard
        title='Bachelor of Technology'
        image={'/images/online-learning.png'}
        desc="I have completed my B-Tech in Computer Science and Engineering from CGC-Landran in 2022 with 8.05 CGPA."
        />
        <AboutCard
        title='12-Standard'
        image={'/images/training.png'}
        desc="I have completed my 12th standard from Saint Soldier School-Mohali in 2018 with 75%."
        />
        <AboutCard
        title='10-Standard'
        image={'/images/classroom.png'}
        desc="I have completed my 10th standard from Saint Soldier School-Mohali in 2016 with 8.8 CGPA."
        />
        </div>
        </div>

        <div className='work'>
        <div className='work-head'>
        <h2>Work Experience</h2>
        </div>
        <div className='work-body'>
        <AboutCard
        title='Graduate Engineer Intern'
        image={'/images/working.png'}
        desc="I have worked as frontend engineer intern for 9-Months.Used technologies like reactjs and react native."
        />
        <AboutCard
        title='Jr. Software Engineer'
        image={'/images/programmer.png'}
        desc="I have worked as Jr. Frontend Engineer for 4-Months.Used technologies like reactjs and react native."
        />
      
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
