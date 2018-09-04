import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';

import FrontPage from './FrontPage';
import About from './About';
import Boarding from './Boarding';
import Lessons from './Lessons';
import Contact from './Contact';

export const Main = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route path="/about" component={About} />
        <Route path="/boarding" component={Boarding} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('root'));
