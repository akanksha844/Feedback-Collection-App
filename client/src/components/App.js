import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Header from './Header';
import SurveyNew from './surveys/SurveyNew';

const Header = () => < h2 > Header < /h2>
    //import Dashboard from './Dashboard';
const SurveyNew = () => < h2 > SurveyNew < /h2>
    //import Landing from './Landing';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
}

const App = () => {
    return ( <
        div className = "container" >
        <
        BrowserRouter >
        <
        div >
        <
        Route exact path = "/"
        component = { Landing }
        /> <
        Route exact path = "/surveys"
        component = { Dashboard }
        /> <
        Route path = "/surveys/new"
        component = { SurveyNew }
        /> <
        /div>


        <
        /BrowserRouter> <
        /div>
    );
};

export default App;