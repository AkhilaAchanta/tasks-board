import React from 'react';
import './CustomCard.css';

class CustomCard extends React.Component {

    constructor(props) {
    	super(props);
    }

    render() {
    	return (
    		<div onClick = {this.props.onClick} style= {this.props.cardStyle} className= "custom-card-wrapper">
    		  <header className = "card-header">{this.props.title}</header>
    		   <div>{this.props.description}</div>
    		</div>
    	)
    }
}

export default CustomCard;