import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import EmptySpace from "../empty-space/empty-space";
import BurgerIngredientsTabs from "../burger-ingridients-tabs/burger-ingridients-tabs";
import BurgerIngredientItem from "../burger-ingridient-item/burger-ingridient-item";
import styles from "./burger-ingredients.module.css";
import ingredientType from "../../utils/ingridient.type";
import { IngredientsContext } from "../../services/ingredients-context";

const BurgerIngredients = (props) => {
  const { ingredients } = useContext(IngredientsContext);
  const buns = ingredients.filter(item => item.type === 'bun');
  const sauces = ingredients.filter(item => item.type === 'sauce');
  const mains = ingredients.filter(item => item.type === 'main');
  
  return (
    <section className={styles.root}>
      <EmptySpace height="X10"/>
      <h1 className="text text_type_main-large">
        Соберите бургер
      </h1>
      <EmptySpace height="X5"/>
      <BurgerIngredientsTabs/>
      <EmptySpace height="X10"/>
      <div className={styles.wrapper}>
        <h2 className="text text_type_main-medium">
          Булки
        </h2>
        <div className={styles.burger_ingredients_wrapper}>
          {buns.map(item => (
            <BurgerIngredientItem itemData={item} key={item._id} openModal={props.openModal}/>
          ))}
        </div>
        <h2 className="text text_type_main-medium">
          Соусы
        </h2>
        <div className={styles.burger_ingredients_wrapper}>
          {sauces.map(item => (
            <BurgerIngredientItem itemData={item} key={item._id} openModal={props.openModal}/>
          ))}
        </div>
        <h2 className="text text_type_main-medium">
          Начинки
        </h2>
        <div className={styles.burger_ingredients_wrapper}>
          {mains.map(item => (
            <BurgerIngredientItem itemData={item} key={item._id} openModal={props.openModal}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients;