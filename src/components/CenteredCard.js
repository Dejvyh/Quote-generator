import React from 'react';

import classes from './CenteredCard.module.css';
import dividerMobileImg from "../images/pattern-divider-mobile.svg";


const CenteredCard = (props) => {
  let title = props.data ? `ADVICE #${props.data.id}` : "načítá se...";
  let advice = props.data ? props.data.advice : "načítá se...";
  
  return (
    <div className={classes.card}>
      <h2 className={classes['card-title']}>{title}</h2>
      <p className={classes['card-text']}>{advice}</p>
      <img src={dividerMobileImg} alt="čára pro estetiku" />
    </div>
  );
};

export default CenteredCard;
