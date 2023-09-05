import React ,{ useState} from 'react';
import './navbar.css';
import { RiCloseLine, RiMenu3Line, } from 'react-icons/ri'


const Menu = () => (
  <>
    
              <p><a href="#home">Home</a></p>
              <p><a href="#featured">Featured</a></p>
              <p><a href="#services">Services</a></p>
              <p><a href="#team">Company</a></p>
              <p><a href="#footer">Contact Us</a></p>
             
  </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='denl__navbar'>
        <div className="denl__navbar-links">
             <div className="denl__navbar-links_logo">
               <p className='logo'><span>D</span>ELEVER<span>A</span>GE</p> 
             </div>
             <div className="denl__navbar-links_container">
          <Menu/>
        </div>
       </div>

       

        <div className="denl__navbar-hire">
          <button type="button">Hire Us</button>

        </div>

        <div className="denl__navbar-menu">
        {toggleMenu
         ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>

         }

         {toggleMenu && (
          <div className='denl__navbar-menu_container scale-up-center'>
            <div className="denl__navbar-menu_container-links">
                <Menu/>
            <div className="denl__navbar-menu_container-links-hire">
                  <button type="button">Hire Us</button>
             </div>
            </div>
          </div>
         )}
        </div>
    </div>
  )
}

export default Navbar