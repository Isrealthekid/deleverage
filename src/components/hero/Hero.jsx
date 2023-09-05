import React from 'react';
import './hero.css';
import { BsFillPlayFill } from 'react-icons/bs'


const Hero = () => {
  return (
    <div className='hero-header denl__header section__padding ' id='#home'>
      <div className="denl__header-content">
        <div className="denl__header-content__top">
        <h1 className='denl__header-content__heading'>The Crown Jewel Apartments, Lekki.</h1>


        <div className='denl__header-content__sub'>
            <span className='denl__header-content__play'>
            <BsFillPlayFill color='#fff' fontSize={30} />
            </span>

            <p className="denl__header-content__text">
              A leading developer of A-grade commericial, industrial 
              and residential projects in Nigeria. Since foundation 
              the company has doubled its turnover year on year
            </p>
        </div>
      </div>
      </div>

      <div className="denl__header-content__bottom">
        <div className='denl__header-bottom__content'>
          
          <div className="denl__header-bottom__content-box">
            <div className="line"></div>
            <h4>Powerful Strategy</h4>

            <p>High security requirements 
              and highest local standards
            </p>
          </div>

          <div className="denl__header-bottom__content-box">
            <div className="line"></div>
            <h4>Powerful Strategy</h4>

            <p>High security requirements 
              and highest local standards
            </p>
          </div>

          
        </div>

        <div className="denl__header-bottom__content-black">
          <h3>Bigger, Faster & Stronger Projects Than Ever!</h3>
        </div>

      </div>
    </div>
  )
}

export default Hero