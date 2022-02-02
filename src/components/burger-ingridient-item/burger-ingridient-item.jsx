import React from 'react';
import EmptySpace from "../empty-space/empty-space";
import styles from './burger-ingridient-item.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredientItem = (props) => {
  const { image, name, price } = props.itemData;
  
  return (
    <div className={styles.item} onClick={() => props.openModal(props.itemData)}>
      <EmptySpace height="X6"/>
      <div className="image">
        <img src={image} alt={`${name}`}/>
      </div>
      <EmptySpace height="X1"/>
      <div className={styles.price}>
        <span className={`${styles.priceValue} text text_type_digits-default`}>{price}</span>
        <span className="text text_type_digits-default"><CurrencyIcon type="primary" /></span>
      </div>
      <EmptySpace height="X1"/>
      <div className="name">{name}</div>
    </div>
  )
}

export default BurgerIngredientItem;