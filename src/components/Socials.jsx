import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar,FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='socials'>
        <div className="socialDiv">
            <div className="socialsTop">
                <h2>Social Media</h2>
            <span>With a population of almost 130 million, a rich cultural history and diversity, and abundant natural resources, Mexico is among the world's 15 largest economies .</span>
            </div>
            <div className="socialsBottom">
                <div className="socialsBottomImages">
                    <div className="socialsBottomImg">
                        <img className='Imgdimension' src="./uploads/mexico1.jpg" alt="" />
                        <div className="socialsHover">
                            <Link to='/'>Mexico1</Link>
                            <FaStar/><FaInstagram/>
                        </div>
                    </div>
                    <div className="socialsBottomImg">
                        <img className='Imgdimension' src="./uploads/mexico2.jpg" alt="" />
                        <div className="socialsHover">
                            <Link to='/'>Mexico2</Link>
                            <FaStar/><FaInstagram/>
                        </div>
                    </div>
                    <div className="socialsBottomImg">
                        <img className='Imgdimension' src="./uploads/mexico3.jpg" alt="" />
                        <div className="socialsHover">
                            <Link to='/'>Mexico3</Link>
                            <FaStar/><FaInstagram/>
                        </div>
                    </div>
                    <div className="socialsBottomImg">
                        <img className='Imgdimension' src="./uploads/mexico4.jpg" alt="" />
                        <div className="socialsHover">
                            <Link to='/'>Mexico4</Link>
                            <FaStar/><FaInstagram/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Socials