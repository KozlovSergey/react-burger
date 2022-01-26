import React from 'react';
import styles from './nav-link.module.css';
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class NavLink extends React.Component {
  render() {
    const {title, icon} = this.props;
    
    return (
      <a href="#" className={`${styles.link} link pt-4 pr-5 pb-4 pl-5`}>
        {icon}
        <span className={`${styles.text} text text_type_main-default ml-2`}>{title}</span>
      </a>
    )
  }
}

export default NavLink;