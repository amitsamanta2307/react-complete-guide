import React, { ReactNode } from 'react';

import './Button.css';

const Button = (props: {
  type?: "button" | "reset" | "submit" | undefined,
  children?: ReactNode,
  onClick?: () => void
}) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
