import React, { ReactNode } from 'react';

import styles from './Button.module.css';

const Button = (props: {
  type?: "button" | "reset" | "submit" | undefined,
  children?: ReactNode,
  onClick?: () => void
}) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
