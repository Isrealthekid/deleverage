import React from 'react'
import './team.css'
import { BsInstagram,BsFacebook,BsTwitter } from 'react-icons/bs'
import { FaArrowRightLong,FaArrowLeftLong } from 'react-icons/fa6'
import IMG1 from "../../assets/drstrange.JPG"


const Team = () => {
  return (
    <div className='denl__team section__padding' id="team">
      <div className="denl__team-content">
        <div className="denl__team-content__head">
          <div className="denl__team-content__heading">
            <h5>Our Creative People</h5>
            <h3>Meet the Team</h3>
          </div>

          <div className="denl__team-content__buttons">
            <FaArrowLeftLong/>
            < FaArrowRightLong/>
          </div>

        </div>

        <div className="denl__team-content__container">
          <div className="denl__team-individual">
            
            <div className="denl__team-individual__image">
              <img src={IMG1} alt="" />

              <div className="socials">
              <BsInstagram/>
              <BsFacebook/>
              <BsTwitter/>
            </div>
            
            </div>
            
            <div className="denl__team-individual__details">
              <p className="name">John doe</p>
              <p className="post">CEO</p>

            </div>
          </div>

          <div className="denl__team-individual">
            <div className="denl__team-individual__image">
              <img src={IMG1} alt="" />

              <div className="socials">
              <BsInstagram/>
              <BsFacebook/>
              <BsTwitter/>
            </div>
            
            </div>
            
            <div className="denl__team-individual__details">
              <p className="name">John doe</p>
              <p className="post">CEO</p>

            </div>
          </div>

          <div className="denl__team-individual">
            <div className="denl__team-individual__image">
              <img src={IMG1} alt="" />

              <div className="socials">
              <BsInstagram/>
              <BsFacebook/>
              <BsTwitter/>
            </div>
            
            </div>
            
            <div className="denl__team-individual__details">
              <p className="name">John doe</p>
              <p className="post">CEO</p>

            </div>
          </div>
        </div>

        
      </div>
      
    </div>
  )
}

export default Team