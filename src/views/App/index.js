import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoadingPage from "../LoadingPage";
import Home from "../Home";

const { URL: url } = process.evn;

console.log(url);

class App extends React.Component {
  componentDidMount() {
    console.log("didmount");
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoadingPage} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
