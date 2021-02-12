import React from 'react';

class CustomLaneHeader extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
	 return (
	    <div>
          <header
             style={{
        fontWeight: '600',
        fontSize: '15px',
        lineHeight: '18px',
        cursor: '-webkit-grab',
        cursor: '-moz-grab',
        cursor: 'grab',
        width: '70%'
      }}>
                 <div>{this.props.title}</div>
         </header>
        </div>
       )
	}
}

export default CustomLaneHeader;