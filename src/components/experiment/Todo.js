import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nameValue: '',
            list: [],
            total: 0
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
            this.setState(
                {
                    list: [this.state.nameValue, ...this.state.list],
                    nameValue: "",
                    total: this.state.total + 1
                }
            );
        }
    }
    deleteList(index) {
        return (event) => {
            const list = this.state.list;
            // const list = this.state.list.concat();
            // console.log(list);
            list.splice(index, 1);
            this.setState(
                {
                    list: list,
                    total: this.state.total - 1
                }
            );
        }
    }


    render() {
        let { list, total } = this.state;

        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <Helmet>
                    <title>Todo</title>
                </Helmet>
                <h2 className="mb-4">My Todo</h2>

                <form onSubmit={this.submitform}>
                    <input type="text" name="name" className="form-control col-md-3" onChange={this.getName} value={this.state.nameValue} />
                    <button className="btn btn-primary">Add</button>
                </form>

                <div className="todoList">
                    <p>Total: {total}</p>
                    <ul>
                        {
                            list.map(
                                (item, index) => <li key={index} id={index} onClick={this.deleteList(index)}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
