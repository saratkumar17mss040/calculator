import React, { Component } from 'react';

class CalculatorButton extends Component {
	renderButton(i) {
		return (
			<button
				value={this.props.buttonsData[i]}
				type="button"
				className="calcButton"
				onClick={this.props.onClick}
			>
				{this.props.buttonsData[i]}
			</button>
		);
	}

	render() {
		return (
			<div>
				<div>
					{this.renderButton(0)}
					{this.renderButton(1)}
					{this.renderButton(2)}
					{this.renderButton(3)}
                </div>
                
                <div>
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton(7)}
                </div>

				<div>
					{this.renderButton(8)}
					{this.renderButton(9)}
					{this.renderButton(10)}
					{this.renderButton(11)}
				</div>

				<div>
					{this.renderButton(12)}
					{this.renderButton(13)}
					{this.renderButton(14)}
					{this.renderButton(15)}
					{this.renderButton(16)}
				</div>
			</div>
		);
	}
}

export default CalculatorButton;
