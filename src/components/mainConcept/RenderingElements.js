import { Helmet } from 'react-helmet'

export default function RenderingElements() {

    const element = (
        <h5>{new Date().toLocaleTimeString()}.</h5>
    );

    // function tick() {
    //     const element = (
    //         <h5>{new Date().toLocaleTimeString()}.</h5>
    //     );
    //     ReactDOM.render(element, document.getElementById('tick'));
    // }
    // setInterval(tick, 1000);

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Rendering Elements</title>
            </Helmet>

            <h2 className="mb-4">Rendering Elements</h2>
            <p>React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.<br />With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().</p>

            <div>
                <strong>Ticking clock</strong>
                <p>React Only Updates What’s Necessary</p>
            </div>
            <div id="tick"></div>
            {element}
        </div>
    )
}
