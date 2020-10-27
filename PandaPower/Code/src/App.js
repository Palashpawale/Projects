import React from 'react';
import './App.css';
import Header from './components/Headers/Headers';
import Space from './components/Space/Space';
import Homepage from './containers/Homepage/Homepage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AboutUs from './containers/AboutUs/AboutUs';
import Post from './containers/Post/Post';
import ContactUs from './containers/ContactUs/ContactUs';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Space />

      <Route path="/"exact component={Homepage} />
      <Route path="/about-us"component={AboutUs}/>
      <Route path="/post/:postId"component={Post}/>
      <Route path="/contact-us"component={ContactUs}/>
      
    </div>
    </Router>
  );
}

export default App;
