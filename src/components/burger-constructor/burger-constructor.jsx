import React from 'react';
import styles from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import EmptySpace from "../empty-space/empty-space";

class BurgerConstructor extends React.Component {
  render() {
    return (
      <section className={styles.root}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <EmptySpace height="X25"/>
          <div className={styles.item}>
            <DragIcon type="primary"/>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.item}>
            <DragIcon type="primary"/>
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.item}>
            <DragIcon type="primary"/>
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.item}>
            <DragIcon type="primary"/>
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.item}>
            <DragIcon type="primary"/>
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

export default BurgerConstructor;