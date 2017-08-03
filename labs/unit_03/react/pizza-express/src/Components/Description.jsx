import React, { Component } from 'react';
import DescripImg from "../images/pizzaoven.jpg";


class Description extends Component {
    render(){
        return(
            <div className="description">
            <img src={DescripImg} alt="pizzaOven"/>
            <p>
                Helvetica trust fund literally before they sold out Tonx banjo retro locavore meggings sartorial chia Thundercats vinyl kitsch fap tofu drinking vinegar Schlitz authentic sustainable vegan High Life hella raw denim Austin bicycle rights 90's gluten-free Marfa synth swag church-key mumblecore tattooed pork belly pugˀ    
            </p>
        </div>
        )
    }

}
export default Description;