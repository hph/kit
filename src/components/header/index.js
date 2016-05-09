import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';

import TodoTextInput from 'components/todo-text-input';
import styles from './styles';


class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render () {
    return (
      <header>
        <h1 styleName="title">todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }

}


export default CSSModules(Header, styles);
