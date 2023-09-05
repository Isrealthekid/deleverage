import React from 'react';
import './reviews.css';
import image from '../../assets/lance.jpg'
import avatar1 from '../../assets/avatar1.jpg'
import { FaArrowRightLong,FaArrowLeftLong } from 'react-icons/fa6'


const Reviews = () => {
  return (
    <div className='denl__reviews section__padding' id='reviews'>
        <div className="denl__reviews-container">
          <div className="denl__reviews-content">
            <p className='denl__reviews-content__heading'>What Our Clients Say!</p>
            <div className="clients__reviews">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Architecto ipsam molestias sapiente, hic soluta laudantium 
                atque sequi aliquid magni ducimus possimus adipisci? 
                Debitis odio atque expedita illo cupiditate odit maxime. 
                Similique molestiae quaerat soluta optio iusto cumque
                est dolore dolorem nobis quidem quibusdam,
                esse vero deleniti aliquid ad? Quisquam, minima.
              </p>
              <div className='clients__bio-content'>
              <div className="clients__bio">
                <img src={avatar1} alt="" />
                <div className="clients__details">
                  <p>John Doe</p>
                  <span>CEO. Pros and Cons</span>
                </div>
              </div>
               <div className="buttons">
                  <span><FaArrowLeftLong/></span>
                  <span><FaArrowRightLong/></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="denl__reviews-image">
          <img src={image} alt="" /> 
        </div>
    </div>
  )
}

export default Reviews