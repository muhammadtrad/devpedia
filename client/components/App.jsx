import React from "react";
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigateBar from './NavigateBar';
import styles from '../styles/styles.css';

const App = () => {


  return (
    <div className="app">
      <Router>
        <NavigateBar />
        <Main />
      </Router>
    </div>
  );
};

export default App;
