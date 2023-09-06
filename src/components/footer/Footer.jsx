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
            At Deleverage Construction Consulting,
             we are committed to providing exceptional construction consulting 
             services to help you achieve your project goals. 
             Whether you're embarking on a new construction project,
              seeking expert advice, or looking to collaborate, 
              our team is here to assist you every step of the way. 
              Feel free to get in touch with us using the information below,
             and we'll be delighted to hear from you.
            </p>

            <div className="request-button">
                <span>< FaArrowRightLong/></span>
                <p>Connect With Us</p>
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
            Stay updated with the latest news, industry insights,
            and project highlights by following us on social media.
            You can find us on Facebook, Twitter, LinkedIn, and Instagram. Join our online community to engage in discussions,
             receive updates, and connect with our team.
            </p>
          <div className="denl__footer-number">
              +234 567 890 1234
            </div>

            <p className="link">Deleverage Construction Consulting
            123 Main Street
            </p>
            
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