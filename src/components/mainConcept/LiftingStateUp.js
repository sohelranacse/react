import { Helmet } from 'react-helmet'
import BoilingCalculator from './BoilingCalculator'
import TemperatureInput from './TemperatureInput'
import BoilingCalculator2 from './BoilingCalculator2'

export default function LiftingStateUp() {
    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Lifting State Up</title>
            </Helmet>

            <h2 className="mb-4">Lifting State Up</h2>
            <ul>
                <li>Often, several components need to reflect the same changing data.</li>
                <li>We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.</li>
            </ul>
            <BoilingCalculator />

            <hr />
            <h6>Adding a Second Input</h6>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />

            <hr />
            <h6>Writing Conversion Functions</h6>
            <p>To Celcius: {toCelsius(104)}</p>
            <p>To Fahrenheit: {toFahrenheit(10.99)}</p>
            <p>Functional: {tryConvert(10.22, toFahrenheit)}</p>

            <hr />
            <h6>Lifting State Up</h6>
            <p>Currently, both TemperatureInput components independently keep their values in the local state:</p>
            <ul>
                <li>In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.</li>
                <li>We will remove the local state from the TemperatureInput and move it into the Calculator instead.</li>
                <li>We know that props are read-only.</li>
                <li>When the temperature was in the local state, the TemperatureInput could just call this.setState() to change it.</li>
            </ul>
            <BoilingCalculator2 />
        </div>
    )
}
