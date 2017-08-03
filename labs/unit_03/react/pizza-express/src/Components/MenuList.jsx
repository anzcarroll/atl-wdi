import React, { Component } from 'react';
import pizzaData from '../pizzaData';
import MenuItem from './MenuItem'

class Menu extends Component {
    render() {
        
    return (
    
    <div className="menu"> 
        <h1>MENU:</h1>
        <div className="menu-container">
        {pizzaData.map((pizzaData, i) => {
         return <MenuItem key={i} image={pizzaData.image} description={pizzaData.description} price={pizzaData.price} name={pizzaData.name}/>
        })}
        </div>
        </div>
        );
    }
}

export default Menu;
