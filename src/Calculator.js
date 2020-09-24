import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import { CalculatorObject } from './CalculatorObject';
import CalculatorPad from './CalculatorPad';

class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			input: '0',
			result: '',
			isNotGoodInput: false,
		};
		this.onClick = this.onClick.bind(this);
		this.calcResult = this.calcResult.bind(this);
		this.clearResult = this.clearResult.bind(this);
	}

	onClick(event) {
		let value = event.target.value;
		if (value === '=') this.calcResult();
		else if (value === 'AC') this.clearResult();
		else {
			this.setState({
				input: value,
				result: this.state.result + value,
			});
		}
	}

	calcResult() {
		try {
			this.setState({
				// eslint-disable-next-line
				result: eval(this.state.result),
				isNotGoodInput: false,
			});
		} catch (error) {
			this.setState({
				isNotGoodInput: error.message,
			});
		}
	}

	clearResult() {
		this.setState({
			result: '',
			input: '0',
			isNotGoodInput: false,
		});
	}

	render() {
		var inform = this.state.isNotGoodInput ? this.state.isNotGoodInput : '';
		return (
			<div className="App">
				<div
					style={{ color: 'red', fontSize: '30px', backgroundColor: 'white', textAlign: 'center' }}
				>
					{inform}
				</div>
				<Display input={this.state.input} result={this.state.result} />
				<CalculatorPad
					buttonsData={CalculatorObject.buttonsData}
					onClick={this.onClick}
				/>
			</div>
		);
	}
}

export default Calculator;
