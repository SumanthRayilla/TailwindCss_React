import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Switch } from 'react-router-dom';

import './App.css'; 
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Event from './Event';
  
function App() {
  return (
    
      <div>
        <Header />
        {/*<Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/event" component={Event} />
           Add other routes here if needed 
        </Switch>*/}
          
          <Home />
        <Footer />
      </div>
    
  );   
}

export default App;
