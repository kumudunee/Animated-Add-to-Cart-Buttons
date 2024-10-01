

import { useState } from 'react';
import styles from './Button.module.css';

const CartButton = () => {
  const [isActive, setIsActive] = useState(false);

  const cartToggleHandler = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 4000);
  };

  return (
    <button className={`${styles.btn} ${isActive ? styles.active : ''}`} onClick={cartToggleHandler}>
      <span className={`${styles['btn__text']} ${styles['btn__text--first']}`}>Add to cart</span>
      <span className={`${styles['btn__text']} ${styles['btn__text--second']}`}>Added</span>
    </button>
  );
};

export default CartButton;
