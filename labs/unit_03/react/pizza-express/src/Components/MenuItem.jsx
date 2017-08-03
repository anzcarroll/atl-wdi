import React, { Component } from 'react';
    
 class MenuItem extends Component {
    render(){
        return (   
        <div className="menu-item">
            <img src={this.props.image} />
            <div className= "menu-description">
            <p className="menu-item-name">{this.props.name}</p> 
            <p>{this.props.price}</p>         
            <p>{this.props.description}</p>
            </div>
        </div>
    
        )
    }
 }


export default MenuItem;