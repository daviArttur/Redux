import { createAsyncThunk, isAsyncThunkAction } from '@reduxjs/toolkit';
import store from '../store/configureStore';

// Store
import getUser from '../store/getUser';


const fetchUser = (token: any) => async (dispatch: any) => {
  try {
   dispatch(getUser.actions.userFetchStarted())
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await response.json();
    if (data) {
      store.dispatch(getUser.actions.userFecthSucess(data))
      return true
    }
    throw new Error("Error");

  } catch (error) {
    store.dispatch(getUser.actions.userFetchError())
  }
};

export default fetchUser



