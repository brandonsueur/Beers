import React, { Component } from 'react'

import './Header.css'
import logo from "./logo.png"

class Header extends Component{
    render() {
        return(
            <header className="header">
                <div className="content">
                    <img src={logo} alt="logo beers" width="80"/>

                    <h1><a href="https://github.com/brandonsueur/react-beers" target="_blank" rel="noopener noreferrer" alt="react-beers">react-beers</a></h1>
                    <p>Shows the beers that exists with Punk API!</p>
                </div>
            </header>
        )
    }
}
export default Header;
