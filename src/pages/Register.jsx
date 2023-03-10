import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='formSign'>
    <div className="formSignDiv">
        <form>
        <h3 className="formSignTitle">Register</h3>
        <div className="formSignGroups">
            <input type="text" 
                   placeholder='username'
                   required 
            />
               <input type="text" 
                   placeholder='email'
                   required 
            />
            <input type="password" 
                   placeholder='password'
                   required 
            />
               <input type="password" 
                   placeholder='repeat password'
                   required 
            />
         </div>
               <button>Register</button>  
               <p>Already have an Account ?    <Link to='/login'>Login here</Link>    </p>
        </form>
    </div>
</div>
  )
}

export default Register