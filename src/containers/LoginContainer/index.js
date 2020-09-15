import React from 'react';
import LoginForm from '../../components/LoginForm';
import './index.css';

export default function LoginContainer() {
  const handleLogin = (userName, password) => {
    debugger
    console.log(userName, password);
  };

  return (
    <div className='app-container'>
      <div className='todo-container'>
        <LoginForm submitLogin={handleLogin} />
      </div>
    </div>
  );
};
