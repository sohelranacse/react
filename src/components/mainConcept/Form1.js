import React, { Component } from 'react'

export default class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-md-4 col-sm-6">
                    <label>Name:</label>
                    <input className="form-control" type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}
