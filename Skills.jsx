import React from 'react'
import  { useState, useEffect } from 'react';
import HTMLlog from "./HTMLlogo.png"
import csslogo from "./csslogo.png"
import jslog from "./jslog.png"
import reactlogo from "./reactlogo.png"
import respon from "./respon.png" 
import bootsrap5logo from "./bootsrap5logo.png"

export default function Skills() {
    const [htmlPercentage, setHtmlPercentage] = useState(0);
    const [cssPercentage, setCssPercentage] = useState(0);
    const [jsPercentage, setJsPercentage] = useState(0);
    const [bootstrapPercentage, setBootstrapPercentage] = useState(0);
    const [reactPercentage, setReactPercentage] = useState(0);
    const [responsivePercentage, setResponsivePercentage] = useState(0);

    useEffect(() => {
        const animateCounters = () => {
          const counters = [
            { percentage: 95, setter: setHtmlPercentage },
            { percentage: 90, setter: setCssPercentage },
            { percentage: 85, setter: setJsPercentage },
            { percentage: 90, setter: setBootstrapPercentage },
            { percentage: 80, setter: setReactPercentage },
            { percentage: 95, setter: setResponsivePercentage },
          ];
    
          counters.forEach(({ percentage, setter }) => {
            let count = 0;
            const increment = Math.ceil(percentage / 100);
    
            const timer = setInterval(() => {
              count += increment;
              if (count >= percentage) {
                count = percentage;
                clearInterval(timer);
              }
              setter(count);
            }, 20);
          });
        };
    
        animateCounters();
      }, []);

    
  return (
   <>
<h1 className='mt-5 ' style={{color: 'white',textAlign: 'center',textDecoration: 'underline',fontWeight: 'bold',textShadow: ''}}>My Skills</h1>
<div className="skills">
    <div className="box html-logo"><img src={HTMLlog} alt="" />
    <h1 className="mt-3" style={{color: '#ff3f3f',fontWeight: 'bolder',fontFamily: 'ui-monospace'}}>{htmlPercentage}%</h1>
    </div>
    <div className="box css-logo"><img src={csslogo} alt="" />
    <h1 className="mt-3" style={{color: '#ff3f3f',fontWeight: 'bolder',fontFamily: 'ui-monospace'}}>{cssPercentage}%</h1>
    </div>
    <div className="box js-logo"><img src={jslog} alt="" />
    <h1 className="mt-4" style={{color: '#ff3f3f',fontWeight: 'bolder',fontFamily: 'ui-monospace'}}>{jsPercentage}%</h1>
    </div>
    <div className="box bs-logo"><img src={bootsrap5logo} alt="" />
    <h1 className="mt-4" style={{color: '#ff3f3f',fontWeight: 'bolder',fontFamily: 'ui-monospace'}}>{bootstrapPercentage}%</h1>
    
    </div>
    <div className="box react-logo"><img src={reactlogo} alt="" />
    <h1 className="mt-4" style={{color: '#ff3f3f',fontWeight: 'bolder',fontFamily: 'ui-monospace'}}>{reactPercentage}%</h1>
    </div>
    <div className="box respo-logo"><img src={respon} alt="" />
    <h1 className="mt-3" style={{color: '#ff3f3f',fontWeight: 'bolder',fontFamily: 'ui-monospace'}}>{responsivePercentage}%</h1>
    
    </div>
</div>
   
     <hr className='mt-5' style={{border: '1px solid white',width: '70rem',margin: 'auto'}}/>
   </>
  )
}
