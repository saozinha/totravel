import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ViagemList from './ViagemList';
//import serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/viagens" component={ViagemList} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
 //serviceWorker();