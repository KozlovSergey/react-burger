import React from 'react';
import EmptySpace from "../empty-space/empty-space";
import BurgerIngredientsTabs from "../burger-ingridients-tabs/burger-ingridients-tabs";

class BurgerIngredients extends React.Component {
  render() {
    return (
      <section>
        <EmptySpace height="X10"/>
        <h1 className="text text_type_main-large">
          Соберите бургер
        </h1>
        <EmptySpace height="X5"/>
        <BurgerIngredientsTabs/>
        <EmptySpace height="X10"/>
        <h2 className="text text_type_main-medium">
          Булки
        </h2>
      </section>
    )
  }
}

export default BurgerIngredients;