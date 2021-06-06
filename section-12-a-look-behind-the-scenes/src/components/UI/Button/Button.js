import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('BUTTON running');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
// ovde ovaj memo ne radi nista!
//u App komponenti smo poslali funkciju kao prop ali svaki put
//kada se App.js ponovo renderuje jer se promenio state (koji se menja u ovoj funkciji)
// sve se izvrsi ponovo, funkcija se ponovo napravi i iako radi sve isto
//nije ista funkcija i zbog toga se props ovde promeni i svakako se renderuje opet
//My paragraph se nece ponovo renderovati jer je boolean, String bla primitive type u JS

//Kada se u App.js doda use Callback ovo se nece ponovo renderovati zato sto
//useCallback ce da sacuva funkciju interno i onda ce ta funkcija svaki put kada se App.js ponovo izvrsi
//zaista da bude ISTA funkcija (pokazuje u memoriji na isto mesto), pa se onda ni props ovde nisu promenili
export default React.memo(Button);
