import React from 'react'

export default function Contact() {
  return (
   <>
   <h1 style={{textAlign: 'center', textDecoration: 'underline',color: 'white'}}>Contact Me</h1>
   <div className="contact-me mt-5">
<div className="form-enquiry">
<input className='mt-5' type='text' placeholder='NAME'></input>
<input className='mx-5 mt-5' stype='text' placeholder='EMAIL'></input><br/>
<textarea className="form-control mt-5" placeholder="Message"  style={{height: "8rem",fontSize: '13px'}}></textarea>
<button className='cv-button mt-5'style={{fontSize: '13px'}}>SEND MESSAGE</button>
</div>

<div className="address-info mt-5">
<h5 style={{fontSize: '13px',textDecoration: 'underline'}}>EMAIL</h5>
<h2 style={{fontSize: '18px',color: 'white'}}>rahmansyedayaz@gmail.com</h2>
<h5 className='mt-5' style={{fontSize: '13px',textDecoration: 'underline'}}>PHONE</h5>
<h2 style={{fontSize: '18px',color: 'white'}}>7979847221</h2>
<h5 className='mt-5' style={{fontSize: '13px',textDecoration: 'underline'}}>ADDRESS</h5>
<h2 style={{fontSize: '18px',color: 'white'}}>Current - Sarfarazganj,Lucknow,Uttar Pradesh</h2>
<h2 className='mt-3' style={{fontSize: '18px',color: 'white'}}>Permanent - Abbas Colony,Siwan,Bihar</h2>


</div>
   </div>
   
   </>
  )
}
