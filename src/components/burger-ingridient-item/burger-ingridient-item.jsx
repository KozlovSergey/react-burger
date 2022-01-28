import React from 'react';
import EmptySpace from "../empty-space/empty-space";
import styles from './burger-ingridient-item.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerIngredientItem extends React.Component {
  render(props) {
    const { image, name, price, type } = this.props.itemData;
    return (
      <div className={styles.item}>
        <EmptySpace height="X6"/>
        <div className="image">
          <img src={this.props.itemData.image}/>
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
}

export default BurgerIngredientItem;