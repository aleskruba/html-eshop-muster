import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Header = () => {
    return (
      <div className='header'>
        <div className="headerTop">
          <div className="headerTopLinks">
            <Link to='/account'>Account: Guest</Link>
            <Link to='/cart'>Your Cart(0)</Link>
            <Link to='/login'>Login / Register</Link>

          </div>
        </div>
        <div className="headerBottom">
          <div className="headerLogo">
           <NavLink to='/' className='headerLogoLink'>
              <h2 className="headerLogoTitle">DOKRAM</h2>
              <h4 className="headerLogoTitle">e-shop</h4>
            </NavLink>
          </div>
              <div className="headerNav">
                <ul>
                  <li>
                    <NavLink to='/' className="headerNavLink" >Home</NavLink>
                  </li>
                  <li>
                    <a href='/#men' className="headerNavLink">Men's</a>
                  </li>
                  <li>
                    <a href='/#women' className="headerNavLink">Women's</a>
                  </li>
                  <li>
                    <a href='/#kids' className="headerNavLink">Kid's</a>
                  </li>
                  <li>
                    <NavLink to='/products' className="headerNavLink">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to='/' className="headerNavLink">Explore</NavLink>
                  </li>
                </ul>
              </div>
            
        </div>
      </div>
    )
  }
  
  export default Header