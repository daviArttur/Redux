import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchUser from './api/getUserApi';
import fetchToken from './api/getTokenApi';

// Store
import store, { RootState } from './store/configureStore';


function App() {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassowrd] = React.useState<string>('');

  const state = useSelector((state: RootState) => state);

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

  function handleinputNameChange(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setUsername(value)
  }

  function handleinputPasswordChange(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setPassowrd(value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    store.dispatch(fetchToken({username, password}))
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input onChange={handleinputNameChange} type="text" id='name' />
        </div>
        <div>
        <label htmlFor="password">Senha:</label>
          <input onChange={handleinputPasswordChange} type="text" id='password' />
        </div>
        <button type='submit'>Entrar</button>
      </form>

      <div>
        {state.getUser.data && (
          <p>{state.getUser.data.email}</p>
        )}
      </div>
    </div>
  );
}

export default App;
