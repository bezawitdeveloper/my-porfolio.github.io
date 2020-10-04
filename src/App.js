import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

import WeatherFetch from './pages/WeatherFetch';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import PositionsList from './pages/PositionsList';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Fragment>
    <Router>
    <div className="App">
    <NavBar />
    
    
    <div id="page-body">
    <Switch>
    <Route exact path="/" component={HomePage}/>
<Route path="/about" component={AboutPage}/>
<Route path="/positions-list" component={PositionsList}/>
<Route path="/position/:name" component={ArticlePage}/>
<Route path="/contact" component={ContactPage}/>
<Route component={NotFoundPage} />
</Switch>
</div>
    
  </div>
    </Router>
   
    </Fragment>
  );

 
}

export default App;
