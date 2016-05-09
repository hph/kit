import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import styles from './styles';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'constants/todo-filters';


const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
};

class Footer extends Component {

  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired,
  };

  renderTodoCount () {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span styleName="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink (filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a
        styleName={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    );
  }

  renderClearButton () {
    const { completedCount, onClearCompleted } = this.props;
    return completedCount > 0 ? (
      <button styleName="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    ) : null;
  }

  render () {
    return (
      <footer styleName="root">
        {this.renderTodoCount()}
        <ul styleName="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }

}


export default CSSModules(Footer, styles);
