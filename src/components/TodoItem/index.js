/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './index.css';

import greenTickIcon from '../../assets/images/green-tick.svg';
import blackTickIcon from '../../assets/images/black-tick.svg';
import editIcon from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';
import checkIcon from '../../assets/images/check.svg';

export default function TodoItem({data, onDeleteTodo, onUpdateTodo}) {
  const [editContent, setEditContent] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();

    const { completed } = data;
    onUpdateTodo({ completed: !completed });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteTodo();
  };

  const toogleEditMode = (e) => {
    e.preventDefault();

    setEditMode(!editMode);
  };

  const handleChangeEditContent = (e) => {
    setEditContent(e.target.value);
  };

  const handleSaveTodo = () => {

    setEditMode(false);
    onUpdateTodo({ content: editContent });
  };

  const { content, completed } = data;

  return (
    <div className='todo-item-container'>
      <a href='#' className='todo-item-toggle' onClick={handleToggle}>
        {completed && <img src={greenTickIcon} alt='tick' />}
        {!completed && <img src={blackTickIcon} alt='tick' />}
      </a>
      {!editMode && (
        <div className={`todo-item-content ${completed ? 'completed' : 'incompleted'}`}>
          {content}
        </div>
      )}
      {editMode && (
        <div className='todo-item-content'>
          <form onSubmit={handleSaveTodo}>
            <input
              type='text'
              placeholder='Todo content'
              onChange={handleChangeEditContent}
              value={editContent}
            />
          </form>
        </div>
      )}
      <div className={`todo-item-options ${editMode ? 'edit' : 'view'}`}>
        {editMode && (
          <>
            <a href='#' className='icon-btn' onClick={handleSaveTodo}>
              <img src={checkIcon} alt='complete-edit' />
            </a>
            <a href='#' className='icon-btn' onClick={toogleEditMode}>
              <img src={deleteIcon} alt='close-edit' />
            </a>
          </>
        )}
        {!editMode && (
          <>
            <a href='#' className='icon-btn' onClick={toogleEditMode}>
              <img src={editIcon} alt='edit' />
            </a>
            <a href='#' className='icon-btn' onClick={handleDelete}>
              <img src={deleteIcon} alt='delete' />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
