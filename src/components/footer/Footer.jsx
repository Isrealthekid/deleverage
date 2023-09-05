import React from 'react';
import './footer.css';
import { BsInstagram,BsFacebook,BsTwitter } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='denl__footer section__padding' id='footer'>
      <div className="denl__footer-content">

          <div className="denl__footer-about">
            
            <div className="denl__footer-header">
              About Deleverage
            </div>

            <p className="link">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              A quos autem eos recusandae quo aspernatur rem repellat, 
              cupiditate, nesciunt expedita, sequi quae ex perspiciatis. 
              Harum aliquid delectus quasi qui, porro similique nihil dicta 
              deserunt quos architecto ea sed optio ipsa unde. Explicabo 
              blanditiis quis recusandae neque? Cupiditate, quam eligendi!
            </p>

            <div className="request-button">
                <span>< FaArrowRightLong/></span>
                <p>Request a quote</p>
            </div>
          </div>

          <div className="denl__footer-services">
          <div className="denl__footer-header">
              Services
            </div>

            <p className="link">Construction Manage</p>
            <p className="link">Construction Consultant</p>
            <p className="link">Arichitecture &Building</p>
            <p className="link">Home Renovation</p>
            <p className="link">Interior Design</p>
            <p className="link">Safety Equipments</p>


          </div>

          <div className="denl__footer-links">
          <div className="denl__footer-header">
              Links
            </div>

            <p className="link">About Us</p>
            <p className="link">Meet Our Team</p>
            <p className="link">News & Media</p>
            <p className="link">Our Projects</p>
            <p className="link">Careers</p>
            <p className="link">Contact</p>

          </div>

          <div className="denl__footer-contact">
          <div className="denl__footer-header">
              Quick Contact
            </div>
            <p className="link">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quis cupiditate ipsam iste praesentium 
              ipsum accusantium debitis vel provident vitae velit?
            </p>
          <div className="denl__footer-number">
              +234 567 890 1234
            </div>

            <p className="link">2345 lorem Rd Ipsum, Lagos Nigeria.</p>
            
           <div className="social-button">
          <BsInstagram/>
              <BsFacebook/>
              <BsTwitter/>
          </div>
          </div>


      </div>
    </div>
  )
}

export default Footer