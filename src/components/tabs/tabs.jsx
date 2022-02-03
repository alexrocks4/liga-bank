import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './tabs.module.scss';
import Button from '../button/button';

function Tabs({ className, activeTabId, data, onTabClick }) {
  return (
    <div className={classNames(className, styles['tabs'])}>
      {data.map(({id, name, text}) => (
        <Button
          className={classNames(
            styles['tabs__tab'],
            styles[`tabs__tab--${name}`],
            {
              [styles['tabs__tab--active']]: activeTabId === id})}
          key={id}
          onClick={() => onTabClick(id)}
        >
          <span className={styles['tabs__tab-content-container']}>
            <span className={styles['tabs__tab-content']}>
              {text}
            </span>
          </span>
        </Button>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  className: PropTypes.string.isRequired,
  activeTabId: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

Tabs.defaultProps = {
  className: '',
  activeTabId: 0,
};

export default Tabs;
