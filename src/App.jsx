import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "c:/Users/PC/github-project/src/pages/HomePage.jsx";
import './style.css';
import SingleRepoPage from './pages/SingleRepoPage.jsx';
import NotFound from './components/NotFound.jsx';
import errorBoundary from "./components/errorBoundary.js";

const App = () => {
  return (
    <Router>
      <errorBoundary>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/repositories/:Assignment-3" component={SingleRepoPage} />
          <Route component={NotFound} />
        </Switch>
      </errorBoundary>
    </Router>
  );
};

export default App;
