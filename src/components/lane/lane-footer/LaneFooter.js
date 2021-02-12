import React from 'react';
import './LaneFooter.css';

class LaneFooter extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div onClick={this.props.onClick} className = "lane-container">
			<span className = "collapse-expand">
			{ this.props.collapsed  ?
		             (
			  	      <span className = "collapse"></span>
			  	      )
			  	 : (
			  		   <span className = "expand"></span>
			  		)
			  }
			 </span>
			</div>
		)
	}
}

export default LaneFooter;