import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';

import FrontPage from './FrontPage';
import TestPage from './TestPage';

export const Main = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route path="/test-page" component={TestPage} />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('root'));
