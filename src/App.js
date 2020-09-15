import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import TodosContainer from './containers/TodosContainer';
import LoginContainer from './containers/LoginContainer';

import configureStore from './store/configureStore';
import { saveTodosToLocalStorage } from './utils/todoUtils';
import {Route, Switch} from 'react-router-dom';
const store = configureStore();

store.subscribe(() => {
  const { todo } = store.getState();

  saveTodosToLocalStorage(todo.items);
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Switch>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/" component={TodosContainer}/>
          </Switch>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
