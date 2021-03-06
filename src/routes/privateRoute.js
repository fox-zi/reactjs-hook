import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute({ children, authenticated, ...rest }) {
  console.log("children", children)
  return (
    <Route
      {...rest}

      render={
        ({ location }) => {
          return authenticated ? (
            children
          ) : (
              <Redirect to={{ pathname: "/login", state: { from: location } }} />
            )
        }
      }
    />

  )
}
