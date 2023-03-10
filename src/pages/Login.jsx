import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='formSign'>
        <div className="formSignDiv">
            <form>
            <h3 className="formSignTitle">Login</h3>
            <div className="formSignGroups">
                <input type="text" 
                       placeholder='username...'
                       required 
                />
                <input type="password" 
                       placeholder='password...'
                       required 
                />
             </div>
                   <button>Login</button>  
                   <p>Don't have an Account ?    <Link to='/register'>Register here</Link>    </p>
            </form>
        </div>
    </div>
  )
}

export default Login