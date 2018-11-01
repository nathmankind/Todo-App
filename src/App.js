import React, { Component } from "react";
import Todo from "./components/Todo";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <Switch>
      //     <Route path="/" exact component={Home} />
      //     <Route path="/convert" component={ExchangeRateCard} />
      //   </Switch>
      // </BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;
