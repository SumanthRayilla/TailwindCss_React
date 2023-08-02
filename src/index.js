import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'tailwindcss/dist/tailwind.min.css'; 
// import 'font-awesome/css/all.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Header from './Header.js';

//import Footer from './Footer';
//import Home from './Home';


ReactDOM.render(
  <React.StrictMode>
    
   {/* <Router>
      <Header />
      <Switch>
        <Route path="/Event" component={Event} />
        <Route path="/" exact>  
              <Home />
        </Route>  
      </Switch>
      <Footer />
    </Router>*/}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
