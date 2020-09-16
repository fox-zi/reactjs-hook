import React, { Component } from 'react';

import Routes from '../../routes';

export default () => {
  const authenticated = false;
  return (
    <div className="root-container">
      <Routes authenticated={authenticated} />
    </div>
  );
};
