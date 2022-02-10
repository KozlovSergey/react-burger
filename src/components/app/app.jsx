import React, { useEffect } from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import { API_GET_DATA } from "../../utils/constants";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

const App = () => {
  const [data, setData] = React.useState([]);
  const [ingredientVisible, setIngredientVisible] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState({});
  const [orderVisible, setOrderVisible] = React.useState(false);
  
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
  
  const openOrderModal = () => {
    setOrderVisible(true);
  };
  
  const closeOrderModal = () => {
    setOrderVisible(false);
  };
  
  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        if(ingredientVisible) {
          setIngredientVisible(false)
        }
        else if(orderVisible) {
          setOrderVisible(false);
        }
      }
    }
    
    window.addEventListener('keydown', close);
    
    return () => window.removeEventListener('keydown', close);
    
  },[ingredientVisible, orderVisible]);
  
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients data={data} openModal={openIngredientModal}/>
        <BurgerConstructor data={data} openModal={openOrderModal}/>
        {ingredientVisible && (
          <Modal onClick={closeIngredientModal} header="Детали ингредиента">
            <IngredientDetails currentIngredient={currentIngredient}/>
          </Modal>
        )}
        { orderVisible && (
          <Modal onClick={closeOrderModal} header="">
            <OrderDetails />
          </Modal>
        )}
      </main>
    </div>
  );
}

export default App;
