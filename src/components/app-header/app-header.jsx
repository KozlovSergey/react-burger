import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import NavLink from "../nav-link/nav-link";
import styles from "./app-header.module.css";

class AppHeader extends React.Component {
  render() {
    return (
      <header className="pt-4 pb-4">
        <nav className={styles.nav}>
          <div className={`${styles.navItem}`}>
            <NavLink title="Конструктор" icon={<BurgerIcon type="primary"/>}/>
            <NavLink title="Лента заказов" icon={<ListIcon type="primary"/>}/>
          </div>
          <div className={styles.navItem}>
            <Logo/>
          </div>
          <div className={styles.navItem}>
            <NavLink title="Личный кабинет" icon={<ProfileIcon type="primary"/>}/>
          </div>
        </nav>
      </header>
    );
  }
}

export default AppHeader;