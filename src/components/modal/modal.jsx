import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById("modals");

const Modal = (props) => {
  return ReactDOM.createPortal((
      <>
        <ModalOverlay onClick={props.onClose}/>
        <div className={`${styles.root} pt-10 pr-10 pb-15 pl-10`} onClick={e => e.stopPropagation()}>
          <div className={styles.header}>
            {props.header && <h2 className="text_type_main-large">{props.header}</h2>}
            <button className={styles.closeButton} onClick={props.onClose}>
              <CloseIcon type="primary"/>
            </button>
          </div>
          {props.children}
        </div>
      </>
    ), modalRoot
  )
};

Modal.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal;