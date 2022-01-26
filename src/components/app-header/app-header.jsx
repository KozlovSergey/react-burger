import React from 'react';
import NavLink from "../nav-link/nav-link";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
  render() {
    return (
      <header className="pt-4 pb-4">
        <nav>
          <NavLink title="Конструктор" icon={<BurgerIcon type="primary" />} />
        </nav>
      </header>
    );
  }
}

export default AppHeader;