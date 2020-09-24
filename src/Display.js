import React, { Component } from 'react';
import DisplayResult from './DisplayResult';
import DisplayInput from './DisplayInput';

class Display extends Component {
	render() {
		return (
			<div className="display">
				<DisplayResult result={this.props.result} />
				<DisplayInput input={this.props.input} />
			</div>
		);
	}
}

export default Display;
