import React from 'react';
import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients-item.module.css';
import ingredientType from "../../utils/ingridient.type";

function BurgerIngredientsItem(props) {
  const ingredients = useSelector(store => store.burger.constructorIngredients).filter(item => item._id === props.data._id);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: props.data
  });

  return (
    <li 
      key={props.data._id} 
      className={`${styles.card} mb-8`} 
      onClick={() => props.openModal(props.data)}
      ref={dragRef}
      >
        {
          ingredients.length > 0 && (
            <span className={`${styles.count} text_type_digits-default`}>{ingredients.length}</span>
          )
        }
        <img src={props.data.image} alt=""/>
        <span className={`${styles.price} mt-2 mb-1 text_type_digits-default`}>
          {props.data.price}
          <CurrencyIcon type="primary" />
        </span>
        <p className={`${styles.name} text_type_main-default`}>{props.data.name}</p>
    </li>
  );
}

BurgerIngredientsItem.propTypes = {
  itemData: ingredientType.isRequired
};

export default BurgerIngredientsItem;