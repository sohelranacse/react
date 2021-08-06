import { Helmet } from 'react-helmet'

export default function Readme() {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Readme</title>
            </Helmet>
            <h2 className="mb-4">Readme</h2>
            <p>
                <code>npx create-react-app practce-react</code><br/>
                <code>npm install react-router-dom</code><br/>
                <code>npm install react-helmet</code><br />
                <code>npx react-codemod rename-unsafe-lifecycles</code><br />
                <code>npm install --save react-helmet@^6.0.0-beta.2</code><br />
                <code>npm install react-syntax-highlighter --save</code><a href="https://github.com/react-syntax-highlighter/react-syntax-highlighter" target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>Link</a>
            </p>
        </div>
    )
}
