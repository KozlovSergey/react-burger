import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerIngredientsTabs extends React.Component {
  render() {
    const tabs = [
      {
        name: 'bun',
        title: 'Булки',
      },
      {
        name: 'sauce',
        title: 'Соусы',
      },
      {
        name: 'main',
        title: 'Начинки',
      },
    ];
    
    return (
      <div style={{display: 'flex'}}>
        {tabs.map((item) => (
          <Tab
            key={item.name}
          >
            {item.title}
          </Tab>
        ))}
      </div>
    )
  }
}

export default BurgerIngredientsTabs;