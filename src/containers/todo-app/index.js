import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import Header from 'components/header';
import MainSection from 'components/main-section';
import * as TodoActions from 'actions';
import styles from './styles';


class TodoApp extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render () {
    const { todos, actions } = this.props;

    return (
      <div styleName="root">
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CSSModules(TodoApp, styles));
