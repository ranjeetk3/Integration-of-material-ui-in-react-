import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import Home from './components/Home';

const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/counter' component={App} />
    </Switch>
</BrowserRouter>
);

export default Routes;