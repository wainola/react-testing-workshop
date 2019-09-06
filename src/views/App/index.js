import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoadingPage from "../LoadingPage";
import Home from "../Home";

import RandomUser from "../../services/RandomUser";

const {
  REACT_APP_URL: url,
  REACT_APP_USER_KEY: laboratoriaUsers,
  REACT_APP_REQUEST_SIZE: requestSize
} = process.env;

const UserService = new RandomUser(url);

class App extends React.Component {
  componentDidMount() {
    UserService.fetchUsers(requestSize).then(data =>
      localStorage.setItem(laboratoriaUsers, JSON.stringify(data))
    );
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoadingPage} />
          <Route
            path="/home"
            render={props => (
              <Home
                {...props}
                UserService={UserService}
                localStorageKey={laboratoriaUsers}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
