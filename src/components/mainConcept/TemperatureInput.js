import React, { Component } from 'react'

export default class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };
        
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}
