import React from 'react'
import { FaQuoteLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='explore'>
          <div className="exploreDiv">
            <div className="exploreDivLeft">
              <h2 className="exploreTitle">Explore our Products</h2>
              <span className="exploreDesc">ing with 'disgusted' parents who claimed the policy had 'taken away their human rights'. Dozens of pupils were also seen protesting outside Haven High Academy, Lincolnshire, with one parent comparing its new policy to 'prison rules'.</span>
              <div className="exploreQuote">
               <FaQuoteLeft/> 
               <p className="exploreQuoteText">Your news feed helps you keep up with recent activity on repositories you watch or star and people you follow.</p>
              </div>
              <p className="exploreDescText">
              ing with 'disgusted' parents who claimed the policy had 'taken away their human rights'. Dozens of pupils were also seen protesting outside Haven High Academy, Lincolnshire, with
             <Link to='/contact'> Contact Us</Link>
              </p>
              <Link to='/' className='exploreLink'>Discover more</Link>

          </div>
            <div className="exploreDivRight">
              <div className="exploreDivCards">
                 <div className="exploreDivCard">
                    <div className="exploreDivText">
                        <h4>Leather Bags</h4>
                        <span>Latest collection</span>
                    </div>
                 </div>
                 <div className="exploreDivCard">
                    <div className="exploreDivImg">
                      <img  src="./uploads/th.jpg" alt="" />
                    </div>
                 </div>
                 <div className="exploreDivCard">
                  <div className="exploreDivImg">
                        <img className='exploreImg' src="./uploads/th1.jpg" alt="" />
                      </div>
                 </div>
                 <div className="exploreDivCard">
                 <div className="exploreDivText">
                        <h4>DISCOVER TODAY</h4>
                        <span>Let's go</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Explore