import React, { Component } from 'react';

class DisplayInput extends Component {
	render() {
		return (
			<div className="input">
				<span style={{ marginLeft: '15px' }}>{this.props.input}</span>
			</div>
		);
	}
}

export default DisplayInput;
