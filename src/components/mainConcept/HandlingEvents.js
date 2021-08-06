import { Helmet } from 'react-helmet'
import ToggleEvent from './ToggleEvent'
import LoggingButton from './LoggingButton'

export default function HandlingEvents() {
    function handleSubmit(e) {
        e.preventDefault();
        alert('You clicked submit.');
    }
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Handling Events</title>
            </Helmet>

            <h2 className="mb-4">Handling Events</h2>
            <p>Handling events with React elements is very similar to handling events on DOM elements.</p>
            <ul>
                <li>React events are named using camelCase, rather than lowercase.</li>
                <li>With JSX you pass a function as the event handler, rather than a string.</li>
                <li>Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.</li>
                <li>When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created.</li>
                <li>When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.</li>
            </ul>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr />
            <ToggleEvent />
            <hr />
            <LoggingButton />
        </div>
    )
}
