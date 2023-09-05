import React from 'react';
import './services.css';
// import { BsBuildingsFill} from 'react-icons/bs'
import { GiLifeJacket,GiConcreteBag } from 'react-icons/gi'
import { FaHelmetSafety } from 'react-icons/fa6'
import { FcCheckmark } from 'react-icons/fc'
import { FaArrowRightLong } from 'react-icons/fa6'


const Services = () => {
  return (
    <div className='denl__services section__padding' id='services'>
      <div className="denl__services-list">

      
      <div className="denl__services-content">
        <div className="denl__services-icon">
               <GiConcreteBag/>
        </div>

        <div className="denl__services-heading">
          Architecture & Building
        </div>
        
        <div className="denl__services-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Qui aliquid, incidunt magni ex, sint iure vitae id modi, 
          pariatur porro voluptatum sit? Eligendi, quaerat provident.
        </div>

        <div className="denl__services-advantage">
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
        </div>

        <div className='denl__services-button'>
          <button type='button'>
            <span className='arrow'><FaArrowRightLong/></span>
            <span>Read more</span>
            </button>
        </div>
      </div>

      <div className="denl__services-content">
        <div className="denl__services-icon">
               <FaHelmetSafety/>
        </div>

        <div className="denl__services-heading">
          Safety & Awearness
        </div>
        
        <div className="denl__services-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Qui aliquid, incidunt magni ex, sint iure vitae id modi, 
          pariatur porro voluptatum sit? Eligendi, quaerat provident.
        </div>

        <div className="denl__services-advantage">
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
        </div>

        <div className='denl__services-button'>
          <button type='button'>
            <span className='arrow'><FaArrowRightLong/></span>
            <span>Read more</span>
            </button>
        </div>
      </div>

      <div className="denl__services-content">
        <div className="denl__services-icon">
               <GiLifeJacket/>
        </div>

        <div className="denl__services-heading">
          Consulting & Construction
        </div>
        
        <div className="denl__services-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Qui aliquid, incidunt magni ex, sint iure vitae id modi, 
          pariatur porro voluptatum sit? Eligendi, quaerat provident.
        </div>

        <div className="denl__services-advantage">
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
          <p> <span><FcCheckmark/></span> lorem ipsum</p>
        </div>

        <div className='denl__services-button'>
          <button type='button'>
            <span className='arrow'><FaArrowRightLong/></span>
            <span>Read more</span>
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services