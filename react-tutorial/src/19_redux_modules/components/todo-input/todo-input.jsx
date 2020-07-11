import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" /> {/* i - это спец тэг font awesome, который встроен в пакет react как компонент */}
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  value: '',
}

export default ToDoInput;
