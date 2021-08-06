import { Helmet } from 'react-helmet'
export default function HelloWorld() {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Hello World</title>
            </Helmet>

            <h2 className="mb-4">Hello World</h2>
            <p>React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language.</p>
        </div>
    )
}
