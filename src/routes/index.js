import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from "./privateRoute"
import TodosContainer from "../containers/TodosContainer"
import LoginContainer from "../containers/LoginContainer"
// import RegisterContainer from "../containers/registerContainer"

export default function Routes({ authenticated }) {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" authenticated={authenticated}>
          <TodosContainer />
        </PrivateRoute>

        <Route path="/login">
          <LoginContainer />
        </Route>
      </Switch>
    </Router>
  )
}
