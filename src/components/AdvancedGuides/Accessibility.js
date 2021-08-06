import { Helmet } from 'react-helmet'

export default function Accessibility() {
    return (
        
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Accessibility</title>
            </Helmet>

            <h2 className="mb-4">Accessibility</h2>
            <p>HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state.</p>
        </div>
    )
}
