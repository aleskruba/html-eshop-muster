import React from 'react'
import { FaPaperPlane } from "react-icons/fa";

const Form = () => {
  return (
    <div className='form'>
        <div className="formDiv">
            <div className="formTop">
                <img src="../uploads/about.jpg" alt="" />
                <div className="formTexts">
                    <h2>Contact Us</h2>
                    <span>✓ Completely Free to Use ✓ High-quality videos</span>
                </div>
               
            </div>
            <div className="formBottom">
                    <div className="formBottomLeft">
                        <div className="formBottomMaps">
                         
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20858.55801633558!2d16.581668257713314!3d49.19449351169183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712944e453638ef%3A0xb7cc14c2f48283cc!2s%C5%A0pilberk%20Castle!5e0!3m2!1sen!2scz!4v1677512665619!5m2!1sen!2scz"  width={600} height={450} ></iframe>
                 
                        </div>
                    </div>
                    <div className="formBottomRight">
                        <div className="formBottomTexts">
                            <h2>Gives you entry to this place</h2>
                            <span>The castle was founded in the second half of the 13th century as a castle of Czech kings and Moravian margraves.</span>    
                        </div>
                        <div className="formBottomForm">
                            <form>
                                <div className="formBottomGroups">
                                    <input type="text" required placeholder='Your name'/>
                                    <input type="text" required placeholder='Your e-mail' />

                                </div>
                                <div className="formBottomGroups">
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
                                    </div> 
                          
                                    <button className='formBottomBtn'><FaPaperPlane/></button>

                            </form>
                        </div>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default Form