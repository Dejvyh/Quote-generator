import React from 'react';
import classes from './CenteredCard.module.css';

const CenteredCard = (props) => {
  let title = props.data ? `ADVICE #${props.data.id}` : "načítá se...";
  let advice = props.data ? props.data.advice : "načítá se...";
  
  return (
    <div className={classes.card}>
      <h2 className={classes['card-title']}>{title}</h2>
      <p>{advice}</p>
    </div>
  );
};

export default CenteredCard;
