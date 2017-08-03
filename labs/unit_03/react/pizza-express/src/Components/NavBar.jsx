import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return(
            <div className="navbar">
                <a href="./LocationList">Locations</a>
                <a href="./Description">Our Story</a>
                    <h1>PIZZA-EXPRESS</h1>
                 <a href="./Contact">Contact</a>
                <a href="./MenuList">Menu</a>
            </div>
        );
    }
}

export default NavBar;