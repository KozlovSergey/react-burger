import React from 'react';
import PropTypes from "prop-types";
import styles from './order-details.module.css';
import doneIcon from '../../images/done.svg';

const OrderDetails = ( props ) => {
  const { orderNumber } = props;
  return (
    <section className={`${styles.root}`}>
      <span className={`${styles.title} text_type_digits-large mt-4 mb-8`}>{orderNumber}</span>
      <p className={`${styles.subtitle} text_type_main-medium mb-15`}>идентификатор заказа</p>
      <img src={doneIcon} alt="" className="mb-15"/>
      <p className={`${styles.orderInfo} text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
      <p className={`${styles.orderInfo} ${styles.textColor} text_type_main-default mb-2`}>Дождитесь готовности на орбитальной станции</p>
    </section>
  )
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
}

export default OrderDetails;