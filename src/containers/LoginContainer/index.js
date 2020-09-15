import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class LoginContainer extends Component {
  handleCreateTodo = (content) => {
    const { createTodo } = this.props;
    createTodo(content);
  };

  render() {
    return (
      <div className='app-container'>
        <div className='todo-container'>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
