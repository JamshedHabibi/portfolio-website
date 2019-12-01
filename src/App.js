import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TitlePage from './components/TitlePage';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Copyright from './components/Copyright';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TitlePage/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
        <Copyright/>
        <Navbar />
    </React.Fragment>
  );
}
}

export default App;
