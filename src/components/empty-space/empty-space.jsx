import React from 'react';
import classNames from 'classnames';
import styles from './empty-space.module.css';

class EmptySpace extends React.Component {
  render(props) {
    const heightClassName = 'space-' + this.props.height;
    console.log(heightClassName);
    
    return (
      <div
        className={classNames('space', {
          [`${styles.space + this.props.height}`]: true
        })}
      ></div>
    )
  }
}

export default EmptySpace;