import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import TodoItem from 'components/todo-item';
import Footer from 'components/footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'constants/todo-filters';
import styles from './styles';


const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed,
};

class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor (props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted();
  }

  handleShow = filter => {
    this.setState({ filter });
  }

  renderToggleAll (completedCount) {
    const { todos, actions } = this.props;
    return todos.length > 0 ? (
      <input
        styleName="toggle-all"
        type="checkbox"
        checked={completedCount === todos.length}
        onChange={actions.completeAll}
      />
    ) : null;
  }

  renderFooter (completedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.length - completedCount;

    return todos.length ? (
      <Footer
        completedCount={completedCount}
        activeCount={activeCount}
        filter={filter}
        onClearCompleted={this.handleClearCompleted}
        onShow={this.handleShow}
      />
    ) : null;
  }

  render () {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    );

    return (
      <section styleName="main">
        {this.renderToggleAll(completedCount)}
        <ul styleName="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }

}


export default CSSModules(MainSection, styles);
