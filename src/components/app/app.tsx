import React, { useEffect } from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import { API_GET_DATA } from "../../utils/constants";

const App = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch(API_GET_DATA)
      .then(result => {
        if (result.ok) {
          return result.json();
        }
        return Promise.reject(`Ошибка ${result.status}`);
      })
      .then(data => setData(data.data))
      .catch(e => {
        console.log('Error: ' + e.message);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
