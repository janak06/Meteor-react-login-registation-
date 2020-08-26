import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-sm bg-dark">
                <Link to="/dashboard" className="m-2">Home</Link>
            
                <Link to="/about" className="m-2">About</Link>
            
                <Link to="/contact" className="m-2">Contact</Link>
            </nav>
            
         );
    }
}
 
export default Navbar;