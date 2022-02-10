import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import EmptySpace from "../empty-space/empty-space";
import ingredientType from "../../utils/ingridient.type";
import { IngredientsContext } from "../../services/ingredients-context";

const BurgerConstructor = (props) => {
  const { ingredients } = useContext(IngredientsContext);
  const bunIngredient = ingredients && ingredients.find(ingredient => ingredient.type === 'bun');
    
    return (
      <section className={styles.root}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <EmptySpace height="X25"/>
          <div className={`${styles.item} pr-4`} style={{justifyContent: 'flex-end'}}>
            {bunIngredient && <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bunIngredient.name} (верх)`}
              price={bunIngredient.price}
              thumbnail={bunIngredient.image}
            />}
          </div>
          <div className={styles.wrapper}>
            {ingredients.slice(1, -1).map((item, index) => (
              <div className={`${styles.item} pr-2`} key={index}>
                <DragIcon type="primary"/>
                <ConstructorElement
                  type={item.type}
                  isLocked={false}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            ))}
          </div>
          <div className={`${styles.item} pr-4`} style={{justifyContent: 'flex-end'}}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bunIngredient.name} (низ)`}
              price={bunIngredient.price}
              thumbnail={bunIngredient.image}
            />
          </div>
        </div>
        <EmptySpace height="X10"/>
        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={`${styles.price_value} text text_type_digits-medium`}>610</span>
            <span className={styles.price_currency}>
              <CurrencyIcon type="primary"/>
            </span>
          </div>
          <div className={styles.button_wrapper}>
            <Button type="primary" size="large" onClick={() => props.openModal()}>
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType.isRequired)
};

export default BurgerConstructor;