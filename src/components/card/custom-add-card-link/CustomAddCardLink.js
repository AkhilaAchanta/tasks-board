import React from 'react';
import './CustomAddCardLink.css';

class CustomAddCardLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className = "add-card-link">
			  <span onClick = {this.props.onClick}>Add Card</span>
			</div>
		)
	}
}

export default CustomAddCardLink;