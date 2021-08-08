import React from 'react'
import { Helmet } from 'react-helmet'

export default function Content() {
    const REACT_VERSION = React.version;
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>About</title>
            </Helmet>
            <h2 className="mb-4">About</h2>
            <p><code>npm -v</code>: v7.20.1</p>
            <p><code>node -v</code>: {REACT_VERSION}</p>
            <p><code>npm view react version</code>: v17.0.2</p>
        </div>
    )
}
