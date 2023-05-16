import React from 'react';
import {Link} from 'react-router-dom';
import './registration.css';
import Login from './Login';

const Registration = () => {
    function handleSubmit(event){
        event.preventDefault();
    }

  return (
    <div>
        <div className="mainContainer">
            <div className="imageContainer">
                <img src="../src/assets/hiking.jpg" alt="hiking image for registration" className='image'/>
            </div>
            <div className="formContainer">
                <form action="submit-form" method='POST' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" name='first name' id='first name' placeholder='First name' required/>
                <input type="text" name='last name' id='last name' placeholder='last name' required/>
                <input type="email" name='email' id='email' placeholder='Email' required/>
                <input type="password" name="password" id="pasword" pattern='.{8,}' title='Password must be 8 characters' placeholder='Password' required/>
                <button type="submit">Submit</button>
                <div className="login">
                <p>Already have an account? {' '}
                            <Link to={<Login/>}>Login</Link>
                        </p>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registration
