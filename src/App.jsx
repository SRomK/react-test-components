//REACT
import React from 'react';

//STYLES
import './App.css';

//COMPONENTS
import Router from './Router';

export default class App extends React.Component {
 
  render() {
    return (
        <div className="App">
           
            <Router></Router>

        </div>
    );
    }
}


