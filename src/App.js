import React, { Component } from "react";
import { Router } from "react-router-dom";
import Layout from "./components/Layout";
import history from "./routes/History";
import Routes from "./routes/Routes";
// ========== General styles ==========
import "./scss/base.scss";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>{Routes}</Layout>
      </Router>
    );
  }
}

export default App;
