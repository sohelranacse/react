import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }
    render() {
        // console.log(filterText);
        return (
            <form>
                <input type="text" className="form-control col-md-6 col-sm-6" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange} />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
