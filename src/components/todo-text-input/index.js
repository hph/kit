import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import styles from './styles';


class TodoTextInput extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
  };

  constructor (...args) {
    super(...args);
    this.state = {
      text: this.props.text || '',
    };
  }

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render () {
    return (
      <input
        styleName={classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo,
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }

}


export default CSSModules(TodoTextInput, styles, { allowMultiple: true });
