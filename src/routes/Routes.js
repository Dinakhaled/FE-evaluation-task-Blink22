import React, { Suspense } from "react";
import { Redirect, Router, Switch } from "react-router-dom";
import history from "./History";
// ========= Components =========
import * as LazyComponent from "../utils/LazyLoaded";

const Routes = (
  <Suspense fallback={"loading..."}>
    <Router history={history}>
      <Switch>
        <LazyComponent.Dashboard path="/" exact />
        <LazyComponent.Vehicles path="/vehicles" />
        <Redirect from="**" to="/" />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
