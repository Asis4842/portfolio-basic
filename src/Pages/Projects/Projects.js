import React, { useState } from 'react'
import './Projects.css'
import { Carousel } from 'react-responsive-carousel';
import { Project1Data, Project2Data, Project3Data } from '../../Data/projectData';

const Projects = (props) => {
  const [project1,setProject1] = useState(Project1Data)
  const [project2,setProject2] = useState(Project2Data)
  const [project3,setProject3] = useState(Project3Data)
  return (
    <div className='project' id={props.id}>
    <p className='project-sub'>Some of my recent</p>
    <h2 className='project-title'>PROJECTS</h2>
      <div className='project-container'>

   <h5 className='project-sub'>Socio App - MERN Stack</h5>
   
      <Carousel
    autoPlay
    width={'100%'}
    showThumbs={false}
    showIndicators={true}
    // renderArrowNext={(onClickHandler , hasPrev, label) => (
    //    <ButtonNext
    //    onClick={onClickHandler} 
    //    >
    //   <ArrowForwardIosRoundedIcon sx={{color:'#fff'}} />
    //    </ButtonNext> 
    // )}
    // renderArrowPrev={(onClickHandler , hasPrev, label) => (
    //     <ButtonPrev
    //     onClick={onClickHandler} 
    //     >
    //    <ArrowBackIosRoundedIcon sx={{color:'#fff'}} />
    //     </ButtonPrev> 
    //  )}
    >
   {project1?.map((item,ind)=>{
    return (
        <div>
        <img src={item.path} alt={item.id} style={{height:'450px',width:'100%',objectFit:'contain'}} />
        </div>
    )
   })}
</Carousel>
<div style={{
  margin:'30px 0px'
}}>

</div>
<h5 className='project-sub'>Buy Me - MERN Stack</h5>
<Carousel
autoPlay

width={'100%'}
showThumbs={false}
showIndicators={true}
// renderArrowNext={(onClickHandler , hasPrev, label) => (
//    <ButtonNext
//    onClick={onClickHandler} 
//    >
//   <ArrowForwardIosRoundedIcon sx={{color:'#fff'}} />
//    </ButtonNext> 
// )}
// renderArrowPrev={(onClickHandler , hasPrev, label) => (
//     <ButtonPrev
//     onClick={onClickHandler} 
//     >
//    <ArrowBackIosRoundedIcon sx={{color:'#fff'}} />
//     </ButtonPrev> 
//  )}
>

{project2?.map((item,ind)=>{
return (
    <div>
    <img src={item.path} alt={item.id} style={{height:'450px',width:'100%',objectFit:'contain'}} />
    </div>
)
})}
</Carousel>
     
<div style={{
  margin:'30px 0px'
}}>

</div>  
<h5 className='project-sub'>Clones App</h5>
<Carousel
autoPlay
infiniteLoop
width={'100%'}
showThumbs={false}
showIndicators={true}
// renderArrowNext={(onClickHandler , hasPrev, label) => (
//    <ButtonNext
//    onClick={onClickHandler} 
//    >
//   <ArrowForwardIosRoundedIcon sx={{color:'#fff'}} />
//    </ButtonNext> 
// )}
// renderArrowPrev={(onClickHandler , hasPrev, label) => (
//     <ButtonPrev
//     onClick={onClickHandler} 
//     >
//    <ArrowBackIosRoundedIcon sx={{color:'#fff'}} />
//     </ButtonPrev> 
//  )}
>

{project3?.map((item,ind)=>{
return (
    <div>
    <img src={item.path} alt={item.id} style={{height:'450px',width:'100%',objectFit:'contain'}} />
    </div>
)
})}
</Carousel>
<div style={{
  margin:'20px 0px'
}}>

</div>  
      </div>
    </div>
  )
}

export default Projects
