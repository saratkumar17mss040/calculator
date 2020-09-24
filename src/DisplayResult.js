import React, { Component } from 'react';

class DisplayResult extends Component {
	render() {
		return (
			<div className="result">
				<span style={{ marginLeft: '15px' }}>{this.props.result}</span>
			</div>
		);
	}
}

export default DisplayResult;
