import React from 'react';
import TodoItem from '../TodoItem';

import './index.css';

export default function TodoList({todos, onDeleteTodo, onUpdateTodo}) {
  return (
    <div className='todo-list-container'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          data={todo}
          onDeleteTodo={() => onDeleteTodo(todo.id)}
          onUpdateTodo={(attributes) => onUpdateTodo(todo.id, attributes)}
        />
      ))}
      {todos.length === 0 && (
        <div className='no-data'>
          No todos
        </div>
      )}
    </div>
  );
}
