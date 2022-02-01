import React from 'react';
import styles from './empty-space.module.css';

class EmptySpace extends React.Component {
  render(props) {
    const heightClassName = `space${this.props.height}`;
    
    return (
      <div className={styles[heightClassName]}></div>
    )
  }
}

export default EmptySpace;