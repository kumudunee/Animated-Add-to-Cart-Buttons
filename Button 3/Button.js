import { useState } from 'react';
import styles from './Button.module.css';
import cartImg from './abc.gif';

const CartButton = () => {
  const [isActive, setIsActive] = useState(false);

  const cartToggleHandler = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 4000);
  };

  return (
    <button className={`${styles.btn} ${isActive ? styles.active : ''}`} onClick={cartToggleHandler}>
      <span className={`${styles.btn__text} ${styles['btn__text--first']}`}>Add to cart</span>
      <img src={cartImg} className={`${styles.btn__icon} ${styles['btn__icon--cart']}`} alt="Cart" />
    </button>
  );
};

export default CartButton;
