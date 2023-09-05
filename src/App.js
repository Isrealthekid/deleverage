import React from 'react';
import './index.css';
import './App.css';
import { Hero,Navbar,About,Featured,Services,Reviews,Team,Sponsors,Footer } from './components';

const App = () => {
  return (
    <div className='App'>
        <div className='header'>
          <div className='nav'>
            <Navbar />
            <Hero/>
       
          </div>
           </div>
       
        <About/>
        <Featured/>
        <Services/>
        <Reviews/>
        <Team/>
        <Sponsors/>
        <div className='black'>
        <Footer/>
        </div>
        
    </div>
  )
}

export default App