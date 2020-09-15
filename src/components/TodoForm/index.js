import React, { memo, useState } from 'react';
import './index.css';

export default memo(({onCreateTodo}) => {
  const [content, setContent] = useState('');

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const clearContent = () => {
    setContent('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      return;
    }
    onCreateTodo(content);
    clearContent();
  };

  return (
    <div className='todo-form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='What need to be done?'
          onChange={handleChangeContent}
          value={content}
        />
      </form>
    </div>
  );
})
