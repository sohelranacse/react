import React, { Component } from 'react'

export default class TextareaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Details here'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-md-4 col-sm-6">
                    <label>Address:</label>
                    <textarea cols="33" rows="8" className="form-control" value={this.state.value} onChange={this.handleChange} />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}
