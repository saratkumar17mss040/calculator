import React, { Component } from 'react';
import CalculatorButton from './CalculatorButton';

class CalculatorPad extends Component {
	render() {
		return (
			<div className="calcPads">
				<CalculatorButton
					buttonsData={this.props.buttonsData}
					onClick={this.props.onClick}
				/>
			</div>
		);
	}
}

export default CalculatorPad;
