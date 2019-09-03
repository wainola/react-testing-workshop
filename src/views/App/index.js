import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoadingPage from "../LoadingPage";

const App = () => (
  <Router>
    <Route path="/" component={LoadingPage} />
  </Router>
);

export default App;
