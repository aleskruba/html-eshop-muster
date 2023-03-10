import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link , NavLink} from 'react-router-dom';

 const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerTop">
        <div className="footerDiv">
            <div className="footerLogo">

                <NavLink to='/' className='footerLogoLink'>
                  <h2 className="footerLogoTitle">DOKRAM</h2>
                  <h4 className="footerLogoTitle">e-shop</h4>
                </NavLink>
              </div>
            <div className="footerLinks">
              <Link to="/">Brno</Link>
              <Link to="/">info@dokram.cz</Link>
              <Link to="/">+532192100</Link>
              <Link to="/contact">Contact Us</Link>


            </div>

        </div>
        <div className="footerDiv">
          <div className="footerTitle">
              <h4>Shopping & Categories</h4>
          </div>
          <div className="footerLinks">
               <Link to="/">Men's Shopping</Link>
              <Link to="/">Women's Shopping</Link>
              <Link to="/">Kid's Shopping</Link>
          </div>

        </div>
        <div className="footerDiv">
          <div className="footerTitle">
                <h4>Useful Links</h4>
            </div>
            <div className="footerLinks">
                <Link to="/">Homepage</Link>
                <Link to="/about">About us</Link>
                <Link to="/">Help</Link>
                <Link to="/contact">Contact Us</Link>
            </div>

        </div>
        <div className="footerDiv">
        <div className="footerTitle">
                <h4>Help & Information</h4>
            </div>
            <div className="footerLinks">
                <Link to="/">Helps</Link>
                <Link to="/">FAQ's</Link>
                <Link to="/">Shipping</Link>
                <Link to="/">Tracking ID</Link>
            </div>

        </div>

      </div>
       <div className="footerBottom">
        <div className="footerBottomCopyright">
        <div className="footerBottomText">
        <p> Copyright &copy; DOKRAM, All Rights Reserved.</p>
        <p> Design: <span><a href='#'>Ales</a> </span></p>
        <div className="footerBottomSocials">
          <Link to='/'><FaFacebookF/></Link>
          <Link to='/'><FaInstagram/></Link>
          <Link to='/'><FaTwitter/></Link>
          <Link to='/'><FaYoutube/></Link>
          <Link to='/'><FaLinkedin/></Link>
          
        </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer