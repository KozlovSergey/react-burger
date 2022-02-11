import React, { useContext } from 'react';
import PropTypes, { func } from 'prop-types';
import styles from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import EmptySpace from "../empty-space/empty-space";
import ingredientType from "../../utils/ingridient.type";
import { IngredientsContext } from "../../services/ingredients-context";

const totalPriceInitialState = { totalPrice: 0 };

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "set":
      return { totalPrice: action.payload };
    case "reset":
      return totalPriceInitialState;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

const BurgerConstructor = (props) => {
  const { makeOrder } = props;
  const {ingredients} = useContext(IngredientsContext);
  const bunIngredient = ingredients.find(ingredient => ingredient.type === 'bun');
  const ingredientsWithoutBuns = ingredients.filter(ingredient => ingredient.type !== 'bun');
  const [totalPriceState, totalPriceDispatcher] = React.useReducer(totalPriceReducer, totalPriceInitialState, undefined);
  const totalPrice = bunIngredient && ingredientsWithoutBuns.map((ingredient) => ingredient.price)
  .reduce((sum, price) => sum + price, 0) + bunIngredient.price * 2;
  
  const clickOrder = () => {
    const burgerIngredients = [bunIngredient, ...ingredientsWithoutBuns].map(((item) => item._id));
    makeOrder(burgerIngredients);
  }
  
  React.useEffect(() => {
    if (ingredients) {
      totalPriceDispatcher({ type: "set", payload: totalPrice });
    } else {
      totalPriceDispatcher({ type: "reset" });
    }
  }, [totalPrice, ingredients])
  
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
          {ingredientsWithoutBuns.map((item, index) => (
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
          <span className={`${styles.price_value} text text_type_digits-medium`}>{totalPriceState.totalPrice}</span>
          <span className={styles.price_currency}>
              <CurrencyIcon type="primary"/>
            </span>
        </div>
        <div className={styles.button_wrapper}>
          <Button type="primary" size="large" onClick={clickOrder}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  makeOrder: PropTypes.func.isRequired
};

export default BurgerConstructor;