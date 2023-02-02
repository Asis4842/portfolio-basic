import React from 'react'

import './AboutCard.css'

const AboutCard = (props) => {

    const {
        title,
        image,
        desc
    }=props
  return (
    <div className='about-card'>
      <img src={image} alt="aboutImages" className='image' />
      <h3 className='abut-title'>{title}</h3>
      <p className='desc-about'>{desc}</p>
    </div>
  )
}

export default AboutCard
