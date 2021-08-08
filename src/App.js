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
import TodoList from './components/experiment/TodoList';

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
import CodeSplitting from './components/AdvancedGuides/CodeSplitting'
import Context from './components/AdvancedGuides/Context'
import ErrorBoundaries from './components/AdvancedGuides/ErrorBoundaries'
import ForwardingRefs from './components/AdvancedGuides/ForwardingRefs'
import Fragments from './components/AdvancedGuides/Fragments'
import HigherOrderComponents from './components/AdvancedGuides/HigherOrderComponents'
import IntegratingwithOtherLibraries from './components/AdvancedGuides/IntegratingwithOtherLibraries'
import OptimizingPerformance from './components/AdvancedGuides/OptimizingPerformance'
import JSXInDepth from './components/AdvancedGuides/JSXInDepth'
import ProfilerAPI from './components/AdvancedGuides/ProfilerAPI'
import ReactWithoutES6 from './components/AdvancedGuides/ReactWithoutES6'
import ReactWithoutJSX from './components/AdvancedGuides/ReactWithoutJSX'
import Reconciliation from './components/AdvancedGuides/Reconciliation'
import RefsandtheDOM from './components/AdvancedGuides/RefsandtheDOM'
import RenderProps from './components/AdvancedGuides/RenderProps'
import StaticTypeChecking from './components/AdvancedGuides/StaticTypeChecking'
import StrictMode from './components/AdvancedGuides/StrictMode'
import TypecheckingWithPropTypes from './components/AdvancedGuides/TypecheckingWithPropTypes'
import UncontrolledComponents from './components/AdvancedGuides/UncontrolledComponents'
import WebComponents from './components/AdvancedGuides/WebComponents'

// Hooks
import IntroducingHooks from './components/Hooks/IntroducingHooks'
import HooksAtAGlance from './components/Hooks/HooksAtAGlance'
import UsingtheStateHook from './components/Hooks/UsingtheStateHook'
import UsingtheEffectHook from './components/Hooks/UsingtheEffectHook'
import RulesofHooks from './components/Hooks/RulesofHooks'
import BuildingYourOwnHooks from './components/Hooks/BuildingYourOwnHooks'
import HooksAPIReference from './components/Hooks/HooksAPIReference'
import HooksFAQ from './components/Hooks/HooksFAQ'

// Testing
import TestingOverview from './components/Testing/TestingOverview'
import TestingRecipes from './components/Testing/TestingRecipes'
import TestingEnvironments from './components/Testing/TestingEnvironments'

export default function App() {  

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                
                <Route exact path="/counting" component={Counting} />
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/todo-line-through" component={Todo_line_through} />
                <Route exact path="/todo-list" component={TodoList} />

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
                <Route exact path="/code-splitting" component={CodeSplitting} />
                <Route exact path="/context" component={Context} />
                <Route exact path="/error-boundaries" component={ErrorBoundaries} />
                <Route exact path="/forwarding-refs" component={ForwardingRefs} />
                <Route exact path="/fragments" component={Fragments} />
                <Route exact path="/higher-order-components" component={HigherOrderComponents} />
                <Route exact path="/integrating-with-other-libraries" component={IntegratingwithOtherLibraries} />
                <Route exact path="/optimizing-performance" component={OptimizingPerformance} />
                <Route exact path="/jsx-in-Depth" component={JSXInDepth} />
                <Route exact path="/profiler-api" component={ProfilerAPI} />
                <Route exact path="/react-without-es6" component={ReactWithoutES6} />
                <Route exact path="/react-without-jsx" component={ReactWithoutJSX} />
                <Route exact path="/reconciliation" component={Reconciliation} />
                <Route exact path="/refs-and-the-dom" component={RefsandtheDOM} />
                <Route exact path="/render-props" component={RenderProps} />
                <Route exact path="/static-type-checking" component={StaticTypeChecking} />
                <Route exact path="/strict-mode" component={StrictMode} />
                <Route exact path="/typechecking-with-propTypes" component={TypecheckingWithPropTypes} />
                <Route exact path="/uncontrolled-components" component={UncontrolledComponents} />
                <Route exact path="/web-components" component={WebComponents} />


                <Route exact path="/introducing-hooks" component={IntroducingHooks} />
                <Route exact path="/hooks-at-a-glance" component={HooksAtAGlance} />
                <Route exact path="/using-the-state-hook" component={UsingtheStateHook} />
                <Route exact path="/using-the-effect-hook" component={UsingtheEffectHook} />
                <Route exact path="/rules-of-hooks" component={RulesofHooks} />
                <Route exact path="/building-your-own-hooks" component={BuildingYourOwnHooks} />
                <Route exact path="/hooks-api-reference" component={HooksAPIReference} />
                <Route exact path="/hooks-faq" component={HooksFAQ} />


                <Route exact path="/testing-overview" component={TestingOverview} />
                <Route exact path="/testing-recipes" component={TestingRecipes} />
                <Route exact path="/testing-environments" component={TestingEnvironments} />

                <Route exact path="/about" component={About} />
                <Route exact path="/readme" component={Readme} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}
