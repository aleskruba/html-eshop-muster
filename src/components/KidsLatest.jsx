import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel';
import { FaStar } from "react-icons/fa";

const KidsLatest = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className='latestContainer' id='kids'>
    <div className="latestDiv">
     <div className="latestTexts">
         <h3 className="latestTitle">Kid's Latest</h3>
         <p className='latestDesc'>hi..Where can I download the project... for the backend</p>
     </div>
     <div className="latestDivImg">
         <div className="latestDivContent">
         <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 300, height: 300, background: '#ff42a5' }}>
          <div className="sliderImgDiv">
            <div className="sliderImgTop">
              <div className="sliderImgTopInner">
                <img src="../uploads/nike3.jpg" alt=""  className="sliderImage" />

              </div>
              <div className="sliderImgTopHover">
                
                </div>

            </div>
            <div className="sliderImgBottomTop">
              <h3 className="sliderImgTitle">Love Nike</h3>
              <span className="sliderImgStar">5 <FaStar/></span>
              </div>
            <div className="sliderImgBottomBottom">
                <h4 className="sliderImgPrice">$150</h4>
            </div>
            </div>
        </div>
        
        <div style={{ width: 300, height: 300, background: '#fd80ed' }}>
            <div className="sliderImgDiv">
                <div className="sliderImgTop">
                <div className="sliderImgTopInner">
                <img src="../uploads/nike3.jpg" alt=""  className="sliderImage" />

              </div>
              <div className="sliderImgTopHover">
                
                </div>

                </div>
                <div className="sliderImgBottomTop">
                  <h3 className="sliderImgTitle">Love Nike</h3>
                  <span className="sliderImgStar">5 <FaStar/></span>
                  </div>
                <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$150</h4>
                </div>
                </div>
            </div>
        <div style={{ width: 300, height: 300, background:  '#ff42a5' }}>
          <div className="sliderImgDiv">
              <div className="sliderImgTop">
              <div className="sliderImgTopInner">
                <img src="../uploads/nike3.jpg" alt=""  className="sliderImage" />

              </div>
              <div className="sliderImgTopHover">
                
                </div>

              </div>
              <div className="sliderImgBottomTop">
                <h3 className="sliderImgTitle">Love Nike</h3>
                <span className="sliderImgStar">5 <FaStar/></span>
                </div>
              <div className="sliderImgBottomBottom">
                  <h4 className="sliderImgPrice">$150</h4>
              </div>
              </div>
          </div>
        <div style={{ width: 300, height: 300, background:'#fd80ed' }}>
          <div className="sliderImgDiv">
              <div className="sliderImgTop">
              <div className="sliderImgTopInner">
                <img src="../uploads/nike3.jpg" alt=""  className="sliderImage" />

              </div>
              <div className="sliderImgTopHover">
                
                </div>
              </div>
              <div className="sliderImgBottomTop">
                <h3 className="sliderImgTitle">Love Nike</h3>
                <span className="sliderImgStar">5 <FaStar/></span>
                </div>
              <div className="sliderImgBottomBottom">
                  <h4 className="sliderImgPrice">$150</h4>
              </div>
              </div>
        </div>
        <div style={{ width: 300, height: 300, background:  '#ff42a5' }}>
          <div className="sliderImgDiv">
              <div className="sliderImgTop">
              <div className="sliderImgTopInner">
                <img src="../uploads/nike3.jpg" alt=""  className="sliderImage" />

              </div>
              <div className="sliderImgTopHover">
                
                </div>
              </div>
              <div className="sliderImgBottomTop">
                <h3 className="sliderImgTitle">Love Nike</h3>
                <span className="sliderImgStar">5 <FaStar/></span>
                </div>
              <div className="sliderImgBottomBottom">
                  <h4 className="sliderImgPrice">$150</h4>
              </div>
              </div>
        </div>
        <div style={{ width: 300, height: 300, background: '#fd80ed'  }}>
          <div className="sliderImgDiv">
              <div className="sliderImgTop">
              <div className="sliderImgTopInner">
                <img src="../uploads/nike3.jpg" alt=""  className="sliderImage" />

              </div>
              <div className="sliderImgTopHover">
                
                </div>
              </div>
              <div className="sliderImgBottomTop">
                <h3 className="sliderImgTitle">Love Nike</h3>
                <span className="sliderImgStar">5 <FaStar/></span>
                </div>
              <div className="sliderImgBottomBottom">
                  <h4 className="sliderImgPrice">$150</h4>
              </div>
              </div>
        </div>

      </ReactSimplyCarousel>

         </div>
     </div>
    </div>
 </div>
  )
}

export default KidsLatest