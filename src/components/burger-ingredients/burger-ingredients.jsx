import React from 'react';
import EmptySpace from "../empty-space/empty-space";
import BurgerIngredientsTabs from "../burger-ingridients-tabs/burger-ingridients-tabs";
import BurgerIngredientItem from "../burger-ingridient-item/burger-ingridient-item";
import styles from "./burger-ingredients.module.css";

class BurgerIngredients extends React.Component {
  render(props) {
    const { data } = this.props;
    let buns = data.filter(item => item.type === 'bun');
    let sauces = data.filter(item => item.type === 'sauce');
    let mains = data.filter(item => item.type === 'main');
    return (
      <section className={styles.root}>
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
        <div className={styles.burger_ingredients_wrapper}>
          {buns.map(item => (
            <BurgerIngredientItem itemData={item}/>
          ))}
        </div>
        <h2 className="text text_type_main-medium">
          Соусы
        </h2>
        <div className={styles.burger_ingredients_wrapper}>
          {sauces.map(item => (
            <BurgerIngredientItem itemData={item}/>
          ))}
        </div>
        <h2 className="text text_type_main-medium">
          Начинки
        </h2>
        <div className={styles.burger_ingredients_wrapper}>
          {mains.map(item => (
            <BurgerIngredientItem itemData={item}/>
          ))}
        </div>
      </section>
    )
  }
}

export default BurgerIngredients;