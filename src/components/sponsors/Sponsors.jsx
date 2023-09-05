import React from 'react';
import './sponsors.css';
import {nairda,  peri,  purechem, masterbuilder,  sika} from './imports'

const Sponsors = () => {
  return (
    <div className='denl__sponsors section__padding' id='sponsors'> 
        

        <div>
          <img src={masterbuilder} alt="masterbuilder" />
        </div>

        <div>
          <img src={purechem} alt="purechem" />
        </div>

         <div>
          <img src={nairda} alt="nairda" />
        </div>

        <div>
          <img src={peri} alt="peri" />
        </div>
       
        <div>
          <img src={sika} alt="sika" />
        </div>
    </div>
  )
}

export default Sponsors