import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchUser from './api/getUserApi';
import fetchToken from './api/getTokenApi';

// Store
import { store } from './store/configureStore';


function App() {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassowrd] = React.useState<string>('');
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  React.useEffect(() => {
    const key = window.localStorage.getItem('token')
    const keyIsTrue = window.localStorage.getItem('token') ? key : null
    
    if (key) {
      console.log(123)
      store.dispatch(fetchUser)
    }
  }, [state])

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
    </div>
  );
}

export default App;
