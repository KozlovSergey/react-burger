import React from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import EmptySpace from "../empty-space/empty-space";

class BurgerConstructor extends React.Component {
  render() {
    return (
      <section className={styles.root}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <EmptySpace height="X25"/>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
          <ConstructorElement
            text="Соус традиционный галактический"
            price={30}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
          <ConstructorElement
            text="Мясо бессмертных моллюсков Protostomia"
            price={300}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
          <ConstructorElement
            text="Плоды Фалленианского дерева"
            price={80}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
      </section>
    )
  }
}

export default BurgerConstructor;