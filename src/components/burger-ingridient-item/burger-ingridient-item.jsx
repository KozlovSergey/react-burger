import React from 'react';
import EmptySpace from "../empty-space/empty-space";
import styles from './burger-ingridient-item.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerIngredientItem extends React.Component {
  render() {
    return (
      <div className={styles.item}>
        <EmptySpace height="X6"/>
        <div className="image">
          <img src="https://code.s3.yandex.net/react/code/bun-02.png"/>
        </div>
        <EmptySpace height="X1"/>
        <div className={styles.price}>
          <span className={`${styles.priceValue} text text_type_digits-default`}>20</span>
          <span className="text text_type_digits-default"><CurrencyIcon type="primary" /></span>
        </div>
        <EmptySpace height="X1"/>
        <div className="name">Краторная булка N-200i</div>
      </div>
    )
  }
}

export default BurgerIngredientItem;