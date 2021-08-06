import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './../../App.css'

export default class Todo_line_through extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            nameValue: '',
            list: [],
            total: 0,
            remaining: 0
        }
    }

    getName = (e) => {
        this.setState(
            {
                nameValue: e.target.value
            }
        );
    }
    submitform = (e) => {
        e.preventDefault();
        if (this.state.nameValue !== "") {
            // const userValue = this.state.nameValue;
            // const list = [...this.state.list]
            // list.push(userValue);
            // this.setState(
            //     {
            //         list: list,
            //         nameValue : ''
            //     }
            // );
            
            this.setState(
                {
                    list: [this.state.nameValue, ...this.state.list],
                    nameValue: "",
                    total: this.state.total + 1,
                    remaining: this.state.total + 1
                }
            );
        }
    }

    crossLine = (e) => {
        const element = e.target;
        // console.log(element);
        element.classList.toggle("lineTrhough");
        // console.log(element.classList.value);

        if (element.classList.value === "lineTrhough") {
            this.setState(
                {
                    remaining: this.state.remaining - 1
                }
            );
        } else {
            this.setState(
                {
                    remaining: this.state.remaining + 1
                }
            );
        }
    };

    render() {
        let { list, total, remaining } = this.state;
        
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <Helmet>
                    <title>Todo Line Through</title>
                </Helmet>
                <h3 className="mb-4">Strike Line - Todo List</h3>

                <form onSubmit={this.submitform}>
                    <input type="text" name="name" className="form-control col-md-3" onChange={this.getName} value={this.state.nameValue} />
                    <button className="btn btn-primary">Add</button>
                </form>

                <div className="todoList">
                    <p>Total {total} in remainging {remaining}</p>
                    <ul>
                        {
                            list.map (
                                (item, index) => <li key={index} id={index} onClick={this.crossLine}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
