import React, {useState} from 'react'
import "./index.css"
import {Link} from 'react-router-dom'

function Login() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[LogIn,setLogIn]= useState(false);

    const handleEmailInput =(event) =>{
        setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
        setPassword(event.target.value)
    }

    function handleLogin(event){
        event.preventdefault();
        if (email ==="bakotey001@st.ug.edu.gh" & password === 10687046){

        }
    }

    function handleLogout(event) {
        event.preventdefault();
        setLogIn(false)
    }
    return (
        <div>
            {
                LogIn
                ?
                <>
                <p>Welcome, to my Blog</p>
                <button onClick={handleLogout}>Logout</button>
                </>

                :

            <div className="bg_image" >
                <div className="center">
                    <div className="box">

                <>
            <form>
                <h2 style={{color:'red'}}>Have an account already?</h2>
                <h3 style={{color:'red'}}>Sign In</h3>
                <input type='email' Placeholder="Enter your email" id="email" className="email" onChange={handleEmailInput}/><br/>
                <input type="password" Placeholder="Enter password" id="password" className="password"  onChange={(event) => handlePasswordInput(event)}/><br/>
                <button style={{color:'blueviolet'}} onClick={handleLogin}>Login</button>
                <p>Don't have an account?</p>
                <Link to ='/Signup' style={{backgroundcolor:'black'}}><button>Signup</button></Link>
                {/* <a href='./Signup'>Signup</a> */}
            </form>
            </>
            </div>
            </div>
        </div>
}
        </div>
        
    )
}

export default Login
