import React from "react";
import ReactDOM from "react-dom";
// import cx from "classnames";
import { Component } from "react";
import { Helmet } from "react-helmet";

export default class TodoList extends Component {
    state = {
        todos: [{ isDone: false, text: "test" }, { isDone: false, text: "test2" }],
        todoText: ""
    };

    handleOnChange = e => {
        this.setState({
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        if (Boolean(this.state.todoText) === false) return false;

        this.setState(state => {
            let newTodos = state.todos.concat({
                isDone: false,
                text: state.todoText
            });
            return {
                todos: newTodos,
                todoText: ""
            };
        });
        e.preventDefault();
    };

    manageTodo = itemIndex => {
        this.setState(state => {
            let newTodos = state.todos.map((todo, index) => {
                if (index === itemIndex) {
                    return { isDone: !todo.isDone, text: todo.text };
                }
                return todo;
            });
            return {
                todos: newTodos
            };
        });
    };

    render() {
        return (
            <div id="content" className="p-4 p-md-5 pt-5">
                <Helmet>
                    <title>Todo List</title>
                </Helmet>

                <h2 className="mb-4">Todo List</h2>
                <form onSubmit={this.handleSubmit}>
                    <InputField
                        value={this.state.todoText}
                        handleOnChange={this.handleOnChange}
                    />
                    <button className="btn btn-sm btn-primary">Add Todo</button>
                </form>
                <TrackProgress todos={this.state.todos} />
                <DisplayList todos={this.state.todos} manage={this.manageTodo} />
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </div>
        );
    }
}

// eslint-disable-next-line
const Title = ({ children }) => <h2>{children}</h2>;
// eslint-disable-next-line
const Button = ({ children }) => (
    <button type="submit" value="Submit">
        {children}
    </button>
);

const InputField = ({ value, handleOnChange }) => {
    return <input type="text" value={value} onChange={handleOnChange} />;
};

const TrackProgress = ({ todos }) => {
    const isNotDone = todos.filter(todo => todo.isDone !== true);
    return (
        <p className="task-counter">
            {isNotDone.length} remaining out of {todos.length} tasks
        </p>
    );
};

const DisplayList = ({ todos, manage }) => {
    return (
        <ul>
            {todos.map((element, index) => (
                <li
                    key={index}
                    onClick={() => manage(index)}
                    className={element.isDone ? "is-done" : "is-not-done"}
                >
                    {element.text}
                </li>
            ))}
        </ul>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoList />, rootElement);
