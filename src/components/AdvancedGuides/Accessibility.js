import { Helmet } from 'react-helmet'

export default function Accessibility() {
    return (
        
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Accessibility</title>
            </Helmet>

            <h2 className="mb-4">Accessibility</h2>
            <ul>
                <li>Standards and Guidelines</li>
                <li>Semantic HTML</li>
                <li>Accessible Forms</li>
                <li>
                    Focus Control
                    <ul>
                        <li>Keyboard focus and focus outline</li>
                        <li>Mechanisms to skip to desired content</li>
                        <li>Programmatically managing focus</li>
                    </ul>
                </li>
                <li>Mouse and pointer events</li>
                <li>More Complex Widgets</li>
                <li>Other Points for Consideration</li>
                <li>Development and Testing Tools</li>
            </ul>
            
        </div>
    )
}
