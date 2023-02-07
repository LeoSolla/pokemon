import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MapPage from './screens/Map/MapPage';
import HomePage from './screens/Home/HomePage';

const App = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/map" component={MapPage} />
        <Redirect from="*" to="/" />
    </Switch>
);

export default App;
