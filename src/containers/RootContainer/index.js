import React from 'react';
import { useSelector } from 'react-redux';
import Routes from '../../routes';

export default () => {
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <div className="root-container">
      <Routes authenticated={authenticated} />
    </div>
  );
};
