// Type and Redux
import getToken from '../store/getToken';
import store from '../store/configureStore';

// Api
import fetchUser from './getUserApi';


type userType = {
  username: string,
  password: string
}

const fetchToken = (user: userType) => async (dispatch: any) => {
  try {
    dispatch(getToken.actions.tokenFetchStarted(user))
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },  
        body: JSON.stringify(user),
      },
    );
    const { token } = await response.json();
    if (token) {
      window.localStorage.setItem('token', token)
      dispatch(getToken.actions.tokenFecthSucess(token))
      store.dispatch(fetchUser(token))
      return true
    }
    throw new Error(`${response.status}`);
  } catch (error) {
    dispatch(getToken.actions.tokenFetchError())
    return error
  }
};

export default fetchToken