import React from 'react'
import { Link , NavLink} from 'react-router-dom';

const Intro = () => {
  return (
    <div className='intro'>
        <div className="introLeft">
                <div className="introLeftDiv">
                    <div className="introLeftContent">
                      <h2 className="introTitle">Shoe's shop</h2>
                <Link to='/products'className='introLink'>Purchase now</Link>
                    </div>
                    <img src="../uploads/woman.jpg" alt="" />
                </div>
        </div>
        <div className="introRight">
          <div className="introRightDiv">
           
            <div className="introRightContent">
                <div className="introRightInner">
                  <div className="introRightText">
                    <h3 className="introRightTitle">Women</h3>
                    <p className="introRightDesc">Best clothes pro Women</p>
                  </div>
                  <img src="../uploads/woman1.jpg" alt="" />

                </div>
                <div className="introRightHover">
                  <div className="introRightHoverTexts">
                      <h3 className="introRightTextTitle">Women</h3>
                        <p className="introRightTextDesc">Brother u did a lot of e com projects hats off maaan !! and please use Redux Toolkit</p>
                        <Link to='/' className='introRightLink'>Discover more</Link>

                  </div>
                </div>
            </div>     

            <div className="introRightContent">
                <div className="introRightInner">
                  <div className="introRightText">
                    <h3 className="introRightTitle">Men</h3>
                    <p className="introRightDesc">Best clothes for men</p>
                  </div>
                  <img src="../uploads/man.jpg" alt="" />

                </div>
                <div className="introRightHover">
                  <div className="introRightHoverTexts">
                      <h3 className="introRightTextTitle">Men</h3>
                        <p className="introRightTextDesc">Brother u did a lot of e com projects hats off maaan !! and please use Redux Toolkit</p>
                        <Link to='/' className='introRightLink'>Discover more</Link>

                  </div>
                </div>
            </div>     

            <div className="introRightContent">
                <div className="introRightInner">
                  <div className="introRightText">
                    <h3 className="introRightTitle">Kids</h3>
                    <p className="introRightDesc">Best clothes pro Kids</p>
                  </div>
                  <img src="../uploads/kid.jpg" alt="" />

                </div>
                <div className="introRightHover">
                  <div className="introRightHoverTexts">
                      <h3 className="introRightTextTitle">Kids</h3>
                        <p className="introRightTextDesc">Brother u did a lot of e com projects hats off maaan !! and please use Redux Toolkit</p>
                        <Link to='/' className='introRightLink'>Discover more</Link>

                  </div>
                </div>
            </div>     

            <div className="introRightContent">
                <div className="introRightInner">
                  <div className="introRightText">
                    <h3 className="introRightTitle">Others</h3>
                    <p className="introRightDesc">Best clothes for others</p>
                  </div>
                  <img src="../uploads/alien1.jpg" alt="" />

                </div>
                <div className="introRightHover">
                  <div className="introRightHoverTexts">
                      <h3 className="introRightTextTitle">Others</h3>
                        <p className="introRightTextDesc">Brother u did a lot of e com projects hats off maaan !! and please use Redux Toolkit</p>
                        <Link to='/' className='introRightLink'>Discover more</Link>

                  </div>
                </div>
            </div>     



      
          
          </div>
       </div>
    </div>
  )
}

export default Intro