import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error';
import Readme from './components/Readme';

// experiment
import Counting from './components/experiment/Counting';
import Todo from './components/experiment/Todo';
import Todo_line_through from './components/experiment/Todo-line-through';

// main concept
import HelloWorld from './components/mainConcept/HelloWorld'
import IntoductionJSX from './components/mainConcept/IntoductionJSX'
import RenderingElements from './components/mainConcept/RenderingElements'
import ComponentsandProps from './components/mainConcept/ComponentsandProps'
import StateandLifecycle from './components/mainConcept/StateandLifecycle'
import HandlingEvents from './components/mainConcept/HandlingEvents'
import ConditionalRendering from './components/mainConcept/ConditionalRendering'
import ListsandKeys from './components/mainConcept/ListsandKeys'
import Forms from './components/mainConcept/Forms'
import LiftingStateUp from './components/mainConcept/LiftingStateUp'
import CompositionvsInheritance from './components/mainConcept/CompositionvsInheritance'
import ThinkinginReact from './components/mainConcept/ThinkinginReact'

// Advanced Guides
import Accessibility from './components/AdvancedGuides/Accessibility'

export default function App() {  

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                
                <Route exact path="/counting" component={Counting} />
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/todo-line-through" component={Todo_line_through} />

                <Route exact path="/hello-world" component={HelloWorld} />
                <Route exact path="/intorduction-jsx" component={IntoductionJSX} />
                <Route exact path="/rendering-rlements" component={RenderingElements} />
                <Route exact path="/components-and-props">
                    <ComponentsandProps name="Sohel" />
                </Route>
                <Route exact path="/state-and-lifecycle" component={StateandLifecycle} />
                <Route exact path="/handling-events" component={HandlingEvents} />
                <Route exact path="/conditional-rendering" component={ConditionalRendering} />
                <Route exact path="/lists-and-keys" component={ListsandKeys} />
                <Route exact path="/forms" component={Forms} />
                <Route exact path="/lifting-state-up" component={LiftingStateUp} />
                <Route exact path="/composition-vs-inheritance" component={CompositionvsInheritance} />
                <Route exact path="/thinking-in-react" component={ThinkinginReact} />
                
                <Route exact path="/accessibility" component={Accessibility} />

                <Route exact path="/about" component={About} />
                <Route exact path="/readme" component={Readme} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}
