import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, style, ...props}) => {
  let buttonClass = classes.myBtn;
  if (style === 'open') {
    buttonClass += ' ' + classes.open;
  } else if (style === 'delete') {
    buttonClass += ' ' + classes.delete;
  } else if (style === 'loginBtn'){
    buttonClass += ' ' + classes.loginBtn;
  }else if (style === 'logoutBtn'){
    buttonClass += ' ' + classes.logoutBtn;
  }
  return (
    <button {...props} className={buttonClass}>
      {children}
    </button>
  );
};

export default MyButton;
