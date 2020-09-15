import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import TodoFooter from '../../components/TodoFooter';
import './index.css';
import { createTodo, updateTodo, deleteTodo, changeFilter, clearCompleted } from '../../actions/todoActions';
import { filterTodos, getIncompletedTodoCount } from '../../utils/todoUtils';

export default function TodosContainer() {
  const dispatch = useDispatch();
  const {
    items = [], filter
  } = useSelector(state => state.todo);

  const handleCreateTodo = (content) => {
    dispatch(createTodo(content));
  };

  const handleUpdateTodo = (id, attributes) => {
    dispatch(updateTodo(id, attributes));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChangeFilter = (filter) => {
    dispatch(changeFilter(filter));
  };

  const handleClearComplete = () => {
    dispatch(clearCompleted());
  };

  const todos = filterTodos(items, filter);
  const incompletedCount = getIncompletedTodoCount(items);

  return (
    <div className='app-container'>
      <div className='todo-container'>
        <TodoForm onCreateTodo={handleCreateTodo} />
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo} />
        <TodoFooter
          activeFilter={filter}
          incompletedCount={incompletedCount}
          onChangeFilter={handleChangeFilter}
          onClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}
