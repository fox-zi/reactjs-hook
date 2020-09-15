import { createTodoInstance } from '../utils/todoUtils';

export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const createTodo = todo => ({
  type: CREATE_TODO,
  payload: { todo: createTodoInstance(todo) }
});

export const updateTodo = (id, attributes) => ({
  type: UPDATE_TODO,
  payload: {id, attributes}
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {id},
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: {filter},
});

export const clearCompleted= () => ({
  type: CLEAR_COMPLETED,
});
