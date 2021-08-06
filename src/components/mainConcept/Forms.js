import { Helmet } from 'react-helmet'
import Form1 from './Form1'
import TextareaForm from './TextareaForm'
import ComboBox from './ComboBox'
import MultipleInputs from './MultipleInputs'

export default function Forms() {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Forms</title>
            </Helmet>

            <h2 className="mb-4">Forms</h2>
            <p>HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state.</p>

            <h6>Controlled Components</h6>
            <ul>
                <li>In HTML, form elements such as input, textarea, and select typically maintain their own state and update it based on user input.</li>
                <li>In React, mutable state is typically kept in the state property of components, and only updated with setState().</li>
            </ul>
            
            <Form1 />
            <hr />
            <TextareaForm />
            <hr />
            <ComboBox />

            <hr />
            <hd>Handling Multiple Inputs</hd>
            <MultipleInputs />
            
        </div>
    )
}
