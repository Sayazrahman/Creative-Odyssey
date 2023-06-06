import React from 'react'
import syedayazrahman from './syedayazrahman.pdf'
export default function About() {
  return (
  <>
  <h1 className='mt-5' style={{textAlign: 'center',color: 'white',}}>About</h1>
  <div className="about mt-5">
<div className="photo-showcase">
</div>
<div className="description">
<h1 style={{textDecoration: 'underline'}}>Syed Ayaz Rahman</h1>
<p className='mt-3'>
As a Frontend Developer and React Js developer, I possess a strong foundation in HTML, CSS, JS, Bootstrap5, and React. With a passion for creating visually appealing and user-friendly websites, I combine my technical skills with a keen eye for design to deliver impressive and engaging web experiences. As a fresher, I am eager to contribute my skills, learn from experienced professionals, and make a meaningful impact in the world of web development. Let's collaborate and bring your ideas to life with innovative and dynamic web solutions.</p>

<button className='cv-button'><a href= {syedayazrahman} target= "__new">Download CV</a></button>
</div>

  </div>
  
  </>
  )
}
