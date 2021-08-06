import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// import $ from 'jquery';

export default class Navbar extends Component {

    sidebarCollapse() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("active");
        // $('#sidebar').toggleClass('active');
    }

    render() {
        return (
            <nav id="sidebar">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={this.sidebarCollapse}>
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>

                <div className="p-3">
                    <h1><NavLink exact to="/" className="logo">React</NavLink></h1>

                    <ul className="list-unstyled components mb-4">
                        <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>

                        <li className="active">
                            <a href="#mainConcept" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Main Concept</a>
                            <ul className="collapse list-unstyled" id="mainConcept">
                                <li><NavLink exact to="/hello-world" activeClassName="selected">Hello World</NavLink></li>
                                <li><NavLink exact to="/intorduction-jsx" activeClassName="selected">Introduction JSX</NavLink></li>
                                <li><NavLink exact to="/rendering-rlements" activeClassName="selected">Rendering Elements</NavLink></li>
                                <li><NavLink exact to="/components-and-props" activeClassName="selected">Components and Props</NavLink></li>
                                <li><NavLink exact to="/state-and-lifecycle" activeClassName="selected">State and Lifecycle</NavLink></li>
                                <li><NavLink exact to="/handling-events" activeClassName="selected">Handling Events</NavLink></li>
                                <li><NavLink exact to="/conditional-rendering" activeClassName="selected">Conditional Rendering</NavLink></li>
                                <li><NavLink exact to="/lists-and-keys" activeClassName="selected">Lists and Keys</NavLink></li>
                                <li><NavLink exact to="/forms" activeClassName="selected">Forms</NavLink></li>
                                <li><NavLink exact to="/lifting-state-up" activeClassName="selected">Lifting State Up</NavLink></li>
                                <li><NavLink exact to="/composition-vs-inheritance" activeClassName="selected">Composition vs Inheritance</NavLink></li>
                                <li><NavLink exact to="/thinking-in-react" activeClassName="selected">Thinking in React</NavLink></li>
                            </ul>
                        </li>

                        <li className="active">
                            <a href="#AdvancedGuides" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Advanced Guides</a>
                            <ul className="collapse list-unstyled" id="AdvancedGuides">
                                <li><NavLink exact to="/accessibility" activeClassName="selected">Accessibility</NavLink></li>
                            </ul>
                        </li>

                        <li className="active">
                            <a href="#Experiment" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Experiment</a>
                            <ul className="collapse list-unstyled" id="Experiment">
                                <li><NavLink exact to="/counting" activeClassName="selected">Counting</NavLink></li>
                                <li><NavLink exact to="/todo" activeClassName="selected">Todo</NavLink></li>
                                <li><NavLink exact to="/todo-line-through" activeClassName="selected">Todo Line Through</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink exact to="/about" activeClassName="selected">About</NavLink></li>
                        <li><NavLink exact to="/readme" activeClassName="selected">Readme</NavLink></li>
                    </ul>

                    <div className="footer">
                        <p>Created by <a href="https://programmingd.com" target="_blank" rel="noopener noreferrer">Sohel</a></p>
                    </div>
                </div>
            </nav>
        );
    }
}
