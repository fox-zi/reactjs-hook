import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function PublicRoute({ children, authenticated, ...rest }) {
  return (
    <Route
      {...rest}

      render={
        ({ location }) => {
          return !authenticated ? (
            children
          ) : (
              <Redirect to={{ pathname: "/", state: { from: location } }} />
            )
        }
      }
    />

  )
}
