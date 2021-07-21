import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = event => {
    event.preventDefault();
    
    const enteredNewPassword =  newPasswordInputRef.current.value;
    //TODO add validation
    console.log(authCtx.idToken);
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDzpAy6EGCydTX7ZBpkiAo_adra2baXHfE', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => {
      // TODO this assumes there is no error... check for error
      history.replace('/');
    })
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
