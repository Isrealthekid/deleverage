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
        Deleverage Construction Consulting: 
        Expert architects craft your vision into 
        practical, beautiful structures, 
        laying the foundation for project success.
      </div>

        <div className="denl__services-advantage">
          <p> <span><FcCheckmark/></span> Cognitive Architecture</p>
          <p> <span><FcCheckmark/></span> Enterprise Architecture</p>
          <p> <span><FcCheckmark/></span> Architectural Designs</p>
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
          Construction Consultant
        </div>
        
        <div className="denl__services-text">
          Count on Deleverage Construction Consulting as 
          your dependable partner for end-to-end construction solutions. 
          We transform your vision into reality, on time and budget.
        </div>

        <div className="denl__services-advantage">
          <p> <span><FcCheckmark/></span> Construction Consultant</p>
          <p> <span><FcCheckmark/></span> Contract Administrator</p>
          <p> <span><FcCheckmark/></span> Consulting Engineer</p>
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
          Construction Management
        </div>
        
        <div className="denl__services-text">
        Deleverage Construction Consulting: Your strategic partner for precise, on-time,
         and budget-friendly construction management, backed by industry expertise
        </div>
      
        <div className="denl__services-advantage">
          <p> <span><FcCheckmark/></span> Design & Build contracts</p>
          <p> <span><FcCheckmark/></span> Planning and Scheduling</p>
          <p> <span><FcCheckmark/></span> Design-build Contracts</p>
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