/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './index.css';

export default function TodoFooter({incompletedCount, activeFilter, onChangeFilter, onClearComplete}) {
  return (
    <div className='todo-footer-container'>
      <div className='todo-left-count'>{incompletedCount} items left</div>
      <div className='todo-menus'>
        <a
          href='#'
          className={activeFilter === 'all' ? 'active' : null}
          onClick={() => onChangeFilter('all')}
        >
          All
        </a>
        <a
          href='#'
          className={activeFilter === 'active' ? 'active' : null}
          onClick={() => onChangeFilter('active')}
        >
          Active
        </a>
        <a
          href='#'
          className={activeFilter === 'complete' ? 'active' : null}
          onClick={() => onChangeFilter('complete')}
        >
          Complete
        </a>
      </div>
      <a
        href='#'
        className='todo-clear-complete'
        onClick={onClearComplete}
      >
        Clear complete
      </a>
    </div>
  );
}
