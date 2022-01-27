import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerIngredientsTabs extends React.Component {
  render() {
    // const [current, setCurrent] = React.useState('one');
    
    return (
      <div style={{display: 'flex'}}>
        <Tab value="one">
          Булки
        </Tab>
        <Tab value="two">
          Соусы
        </Tab>
        <Tab value="three">
          Начинки
        </Tab>
      </div>
    )
  }
}

export default BurgerIngredientsTabs;