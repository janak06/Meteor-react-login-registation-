import React, { Component } from 'react';
import Navbar from './Navbar'
class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <Navbar />
                {this.props.children}
            </div>
         );
    }
}
 
export default Layout;