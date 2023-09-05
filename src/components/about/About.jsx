import React from 'react'
import './about.css';
import aboutimage from '../../assets/aboutbuilding-min.jpg';

const About = () => {
  return (
    <div className='denl__about section__padding' id='about'>
      <div className="denl__about-image">
        <img src={aboutimage} alt="building" />
      </div>

      <div className="denl__about-content">
        <h4 className='denl__about-content__subheading'>For All Architecture And Interior Design</h4>
        <h1 className='denl__about-content__heading'>Attract, Convert And Delight Your Customers!</h1>

        <p>Yet those that embrace change are thriving, 
          building bigger, better, faster, and stronger 
          products than ever before. You are helping lead the charge;
           we can help you build on your past and prepare future 
           changing faster than ever before, Deleverage Constructions are evolving.
          Deleverage is a representative Industrial Construction operator providing 
          full range of service in the sphere of Civil 
          Construction & Mechanical Engineering worldwide for any type of industrial soultions.
        </p>

        <h3 className='name'>Engr. John Doe</h3>
        <p className='.denl__about-content__position'>Founder</p>
      </div>
    </div>
  )
}

export default About