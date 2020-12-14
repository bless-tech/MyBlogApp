import React from 'react'
import picture from './images/woman.png';

function signup() {
    return (
        <div style={{backgroundColor: 'lightblue', backgroundsize: 'cover'}} >
            <div className= "row">
                <img  src ={picture}  width="300px" alt="woman"/>
            </div>
            <form>
                <h2 style={{color:'red'}}>Create Account</h2>

                <labe for="fname">First Name:</labe><br/>
                <input type="text" id="fname"  className="form-group" /><br/>

                <label for="lname">Last Name:</label><br/>
                <input type="text"id="lname" className="form-group" /><br/>

                <label for="email">Email:</label><br/>
                <input type="email" id="email"  className="form-group" /><br/>

                <label for="password">Password:</label><br/>
                <input type="password"id="password" className="form-group" /><br/>
            </form>
            <button style={{color:'blue'}}>Signup</button>
        </div>
    )
}

export default signup;

