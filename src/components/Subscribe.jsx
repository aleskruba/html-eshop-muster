import React from 'react'
import { FaPaperPlane } from "react-icons/fa";


const Subscribe = () => {
  return (
    <div className="subscribe"> 
    <div className="subscribeDiv">
        <div className="subscribeLeft">
            <div className="subscribeTitle">
                <h2>Subscribe now</h2></div>
       <span className='subscribeDesc'>Almost 400 secondary schools across England have been rated as Inadequate by Ofsted inspectors with 209 in Special Measures and 105 showing a Serious Weakness</span>
       
       <form>
            <div className="subscribeFormGroups">
                 <div className="subscribeFormGroup">
                    <input type='text' placeholder='Your Name' required/>            
                    <input type='text' placeholder='Your Email' required/>            
                    <button><FaPaperPlane/></button>
                 </div>
             </div>
       </form>
             </div>
        <div className="subscribeRight">
            <div className="subscribeRightLeft">
                    <div>
                        <h4>Store location:</h4>
                        <span>Brno</span>
                    </div>
                    <div>
                    <h4>Phone:</h4>
                        <span>+420555555555</span>
                    </div>
         
            </div>
            <div className="subscribeRightRight">
            <div>
                    <h4>Work hours:</h4>
                        <span>8-16.00</span>
                    </div>
                    <div>
                    <h4>Email:</h4>
                        <span>email@email.com</span>
                     </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Subscribe