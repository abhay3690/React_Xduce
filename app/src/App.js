import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from '.AboutPage';
import NotFoundPage from '.NotFoundPage'
import './App.css';

function App() {
  return (
   <>
   <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
   </>
  );
}

export default App;
