import React, { useEffect } from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import { API_GET_DATA, API_ORDERS } from "../../utils/constants";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import { IngredientsContext } from "../../services/ingredients-context";

const App = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [ingredientVisible, setIngredientVisible] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState({});
  const [orderVisible, setOrderVisible] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState(null);
  
  useEffect(() => {
    fetch(API_GET_DATA)
    .then(result => {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(`Ошибка ${result.status}`);
    })
    .then(res => {
      setIngredients(res.data);
      
    })
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
    setOrderNumber(null);
    setOrderVisible(false);
  };
  
  const createOrder = (data) => {
    fetch(`${API_ORDERS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ingredients: data }),
    })
    .then(result => {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(`Ошибка ${result.status}`);
    })
    .then((res) => {
      setOrderNumber(res.order.number);
    })
    .catch((err) => console.log(err));
  }
  
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
      { ingredients.length > 0 && (
        <main className={styles.main}>
          <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
            <BurgerIngredients openModal={openIngredientModal}/>
            <BurgerConstructor makeOrder={createOrder} openModal={openOrderModal}/>
          </IngredientsContext.Provider>
          {ingredientVisible && (
            <Modal onClose={closeIngredientModal} header="Детали ингредиента">
              <IngredientDetails currentIngredient={currentIngredient}/>
            </Modal>
          )}
          { orderNumber && (
            <Modal onClick={closeOrderModal} header="">
              <OrderDetails orderNumber={orderNumber} />
            </Modal>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
