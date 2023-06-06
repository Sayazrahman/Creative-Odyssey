import React from 'react';
import Spotify from './Spotify.png';
import EveryThing  from './EveryThing.png';
import weathercheck  from './weathercheck.png';
import bmi  from './bmi.png';
import Flipkart  from './Flipkart.png';
import Travelworld  from './Travelworld.png';
import Gotext from './Gotext.jpg';
import Carshub from './Carshub.png';
import Photopedia from './Photopedia.png';
import passwordgenerator from './passwordgenerator.png';



export default function Potfolio() {







  return (
    <>
 
<h1 style={{marginTop: '5px', padding: '5px',marginLeft: '8rem',color: 'white',textDecoration: 'underline',fontWeight: 'bold'}}>Potfolio</h1>
<div className="my-porfolio">
<div className="card mt-5" >
  <img src={Spotify} className="card-img-top"   alt="..."/>
  <div className="card card-overlay">
  <div className="card-body">
              <h5 className= "card-title mt-3">Spotify (Clone)</h5>
              <p className="card-text mt-3">Developed a Spotify clone utilizing the Spotify API. Enables users to explore and stream an extensive collection of music.</p>
             <a href = 'https://sayazrahman.github.io/Spotify/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
 <div className="card mt-5"   >
  <img src= {EveryThing}   className="card-img-top" alt="..."/>
  <div className="card card-overlay" >
  <div className="card-body">
              <h5 className= "card-title mt-3">EveryThing.com</h5>
              <p className="card-text mt-3">This Website provides various tools for user like BMI calculator,Weather reports,Free Wallpapers and Images,Password Generator and many more.</p>
              <a href = 'https://sayazrahman.github.io/EveryThing.com/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
<div className="card mt-5"  >
  <img src= {weathercheck} className="card-img-top" alt="..."     />
  <div className="card card-overlay">
  <div className="card-body">
              <h5 className= "card-title mt-3">Weather Today</h5>
              <p className="card-text mt-3">This Website provides accurate current weather report and conditions of area searched by the user. </p>
              <a href = 'https://sayazrahman.github.io/EveryThing.com/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
<div className="card mt-5"     >
  <img src={Photopedia} className="card-img-top" alt="..."  />
  <div className="card card-overlay" >
  <div className="card-body">
              <h5 className= "card-title mt-3">Photo Pedia</h5>
              <p className="card-text mt-3">Photo Pedia Website gives user free images and wallpapers according to their requirments,The website uses API to display images by search.</p>
              <a href = 'https://sayazrahman.github.io/EveryThing.com/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
<div className="card mt-5"    >
  <img src= {Flipkart}   className="card-img-top" alt="..."/>
  <div className="card card-overlay">
  <div className="card-body">
              <h5 className= "card-title mt-3">Flipkart-Homepage</h5>
              <p className="card-text mt-3">It is a Flipkart Homepage Clone made with HTML,CSS </p>
              <a href = 'https://sayazrahman.github.io/Flipkart-Homepage/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
<div className="card mt-5"   >
  <img src= {Travelworld}   className="card-img-top" alt="..."/>
  <div className="card card-overlay" >
  <div className="card-body">
              <h5 className= "card-title mt-3">Travel World.com</h5>
              <p className="card-text mt-3">The website is a Travelling website that gives ideas about hotel,meals,Guide,and transportation about the location the user wants,This website is still under developement</p>
              <a href = 'https://sayazrahman.github.io/Travel-world.com' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
<div className="card mt-5"   >
  <img src= {Carshub}     className="card-img-top" alt="..."/>
  <div className="card card-overlay">
  <div className="card-body">
              <h5 className= "card-title mt-3">Cars-Hub</h5>
              <p className="card-text mt-3">A simple login/Sinup form for the enquiry of the cars</p>
              <a href = 'https://sayazrahman.github.io/Cars-Hub/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
<div className="card mt-5"  >
  <img src= {passwordgenerator}     className="card-img-top" alt="..."/>
  <div className="card card-overlay">
  <div className="card-body">
              <h5 className= "card-title mt-3">Secure Password Generator</h5>
              <p className="card-text mt-3">It is a Password Generator for user's account,the tool also feature Copy function.</p>
              <a href = 'https://sayazrahman.github.io/EveryThing.com/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
<div className="card mt-5"   >
  <img src= {bmi}     className="card-img-top" alt="..."/>
  <div className="card card-overlay">
  <div className="card-body">
              <h5 className= "card-title mt-3">BMI Calculator</h5>
              <p className="card-text mt-3">Body Mass Index Calculator for health checkup.Made with HTML,CSS,Javascript,Bootstrap,react</p>
              <a href = 'https://sayazrahman.github.io/EveryThing.com/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>
<div className="card mt-5"  >
  <img src= {Gotext}     className="card-img-top" alt="..."/>
  <div className="card card-overlay" >
  <div className="card-body">
              <h5 className= "card-title mt-3">Go-Text</h5>
              <p className="card-text mt-3">Go-Text is a text analyser that can covert any paragraph in lower or upper case and also extract the emails from the paragraph.</p>
              <a href = 'https://sayazrahman.github.io/Go-Text/' target = "__new" className='btn btn-danger'>Check it out</a>
            </div>
  </div>
</div>

</div>
   
   <hr className='mt-5' style={{border: '1px solid white',width: '50rem',margin: 'auto'}}/>


</>
  )
}
