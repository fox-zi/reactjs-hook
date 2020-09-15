import React, { memo, useState } from 'react';
import './index.css';

export default memo(({submitLogin}) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    if (!userName || !password) {
      return;
    }
    submitLogin(userName, password);
  };

  return (
    <div className='todo-form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='User Name'
          onChange={handleChangeUserName}
          value={userName}
        />

        <input
          type='text'
          placeholder='Password'
          onChange={handleChangePassword}
          value={password}
          className='password'
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
});
