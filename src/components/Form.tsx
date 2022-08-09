import React, { FormEvent } from 'react';
import fetchUser from '../api/getUserApi';
import fetchToken from '../api/getTokenApi';

// Store
import store from '../store/configureStore';

// Styles
import styles from './Form.module.css'


function Form() {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassowrd] = React.useState<string>('');


  React.useLayoutEffect(() => {
    verifyUserTokenInLocalStorage()
  }, [])

  const tokenIsTrue = React.useRef(false)

  function verifyUserTokenInLocalStorage() {
    const key = window.localStorage.getItem('token');
    if (key && tokenIsTrue.current === false) {
      tokenIsTrue.current = true
      store.dispatch(fetchUser(key))
    }
  }

  function handleInputNameChange(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setUsername(value)
  }

  function handleInputPasswordChange(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setPassowrd(value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    store.dispatch(fetchToken({username, password}))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className={styles.container} data-testid="form">
        <div className={styles.div}>
          <label htmlFor="name">Nome:</label>
          <input onChange={handleInputNameChange}
            className="inputName"
            type="text" 
            id='name' 
            name='nome' 
            data-testid="inputName"
           />
        </div>
        <div className={styles.div}>
        <label htmlFor="password">Senha:</label>
          <input onChange={handleInputPasswordChange}
            className="inputPassword"
            type="password" 
            id='password' 
            name='senha'
            data-testid="inputPassword"
             />
        </div>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
}

export default Form;