import React from 'react';
import { Provider } from 'react-redux';

import RootContainer from './containers/RootContainer';

import configureStore from './store/configureStore';
import { saveTodosToLocalStorage } from './utils/todoUtils';
const store = configureStore();

store.subscribe(() => {
  const { todo } = store.getState();

  saveTodosToLocalStorage(todo.items);
});

export default () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};
