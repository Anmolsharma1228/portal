import React from 'react'
import { Parallax, Background } from 'react-parallax';
import cbg from '../../assets/Images/cbg.jpg'
const ParallaxE = () => {
 

return(
<Parallax
        blur={{ min: -15, max: 20 }}
        bgImage={cbg}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div style={{ height: 'full', width: '800px' }} />
    </Parallax>

)

  
    };
 

export default ParallaxE