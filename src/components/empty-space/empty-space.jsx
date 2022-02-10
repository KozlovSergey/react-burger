import React from 'react';
import styles from './empty-space.module.css';
import PropTypes from "prop-types";

const EmptySpace = (props) => {
  const { height } = props;
    const heightClassName = `space${height}`;
    
    return (
      <div className={styles[heightClassName]}/>
    )
}

EmptySpace.propTypes = {
  height: PropTypes.string.isRequired
};

export default EmptySpace;