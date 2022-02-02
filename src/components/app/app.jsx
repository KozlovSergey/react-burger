import React, {useEffect} from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import {API_GET_DATA} from "../../utils/constants";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ ingredient-details";

const App = () => {
  const [data, setData] = React.useState([]);
  const [ingredientVisible, setIngredientVisible] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState({});

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

  const openIngredientModal = (item) => {
    setCurrentIngredient({...item});
    setIngredientVisible(true);
  }

  const closeIngredientModal = () => {
    setIngredientVisible(false);
  }

  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients data={data} openModal={openIngredientModal}/>
        <BurgerConstructor data={data}/>
        {ingredientVisible &&
        (
          <Modal onClick={closeIngredientModal} header="Детали ингредиента">
            {/*<IngredientDetails currentIngredient={currentIngredient}/>*/}
          </Modal>
        )
        }
      </main>
    </div>
  );
}

export default App;
