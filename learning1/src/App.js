import React from 'react'
import About from './About'
import Blog from './Blog'
import Navbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import signup from './Signup'
import Home from './Home'

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/login" component={Login}/>
       <Route path="/signup" component={signup}/>
       <Route path="/blog" component={Blog}/>
    </Switch>
    <footer>
    <h1 style={{color: 'black'}}>Contact us via email: bakotey001@st.ug.edu.gh</h1>
    </footer>
    </Router>
    </div>
  );
}

export default App;
