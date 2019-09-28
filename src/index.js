import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ViagemList from './components/layouts/ViagemList';
import Novas from './components/layouts/Novas';
//import serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/viagens" component={ViagemList} />
            <Route path="/novas" component={Novas} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
// serviceWorker();