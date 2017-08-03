import React, { Component } from 'react';
import locationData from '../locationData';
import Location  from './Location';

class Menu extends Component {
    render() {
        
    return (
    
    <div id="locations">
            <h1>Locations:</h1> 
        <div className="locations"> 
        {locationData.map((locationData, i) => {
         return <Location key={i}  address={locationData.address} phone={locationData.phone} name={locationData.name}/>
        })}
        </div>
        </div>
        );
    }
}

export default Menu;