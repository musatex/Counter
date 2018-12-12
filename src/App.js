import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CounterContainer from "./Container/CounterContainer";


import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
    
          <Switch>
            <Route exact path="/counter" component={CounterContainer} />
         </Switch>
      
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
