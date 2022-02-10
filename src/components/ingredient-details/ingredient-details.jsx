import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';
import ingredientType from "../../utils/ingridient.type";

function IngredientDetails(props) {
  const {image_large, name, calories, proteins, fat, carbohydrates} = props.currentIngredient;
  
  return (
    <section className={styles.root}>
      <img src={image_large} alt="" />
      <h4 className="text_type_main-medium mb-8 mt-4">{name}</h4>
      <div className={`${styles.info}`}>
        <div className={`${styles.infoItem} mr-5`}>
          <span className="text_type_main-default mb-2">Калории,ккал</span>
          <span className="text_type_digits-default">{calories}</span>
        </div>
        <div className={`${styles.infoItem} mr-5`}>
          <span className="text_type_main-default mb-2">Белки, г</span>
          <span className="text_type_digits-default">{proteins}</span>
        </div>
        <div className={`${styles.infoItem} mr-5`}>
          <span className="text_type_main-default mb-2">Жиры, г</span>
          <span className="text_type_digits-default">{fat}</span>
        </div>
        <div className={`${styles.infoItem}`}>
          <span className="text_type_main-default mb-2">Углеводы, г</span>
          <span className="text_type_digits-default">{carbohydrates}</span>
        </div>
      </div>
    </section>
  )
}

IngredientDetails.propTypes = {
  currentIngredient: ingredientType.isRequired
};

export default IngredientDetails;