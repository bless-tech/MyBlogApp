import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


function Navbar() {
    return (
        <div className='horizontal' >
            <nav>
            <ul>
            <Link to= '/'> <li>Home</li> </Link>

            <Link to= '/about'> <li>About</li> </Link>

            <div className='align'>
            <Link to='/login'> <li>Login</li> </Link>
            </div>

            <Link to='signup'> <li>Signup</li> </Link>

            <Link to ='/blog' > <li>Blog</li> </Link>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar;
