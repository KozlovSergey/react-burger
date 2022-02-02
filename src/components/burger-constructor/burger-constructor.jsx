import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import EmptySpace from "../empty-space/empty-space";
import ingredientType from "../../utils/ingridient.type";

class BurgerConstructor extends React.Component {
  
  render(props) {
    const {data} = this.props;
    
    return (
      <section className={styles.root}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <EmptySpace height="X25"/>
          <div className={`${styles.item} pr-4`} style={{justifyContent: 'flex-end'}}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.wrapper}>
            {data.slice(1, -1).map((item) => (
              <div className={`${styles.item} pr-2`} key={item._id}>
                <DragIcon type="primary"/>
                <ConstructorElement
                  type={item.type}
                  isLocked={true}
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
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
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
            <Button type="primary" size="large">
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    )
  }
}

BurgerConstructor.propTypes = {
  data: ingredientType.isRequired
};

export default BurgerConstructor;