import { createAsyncThunk, isAsyncThunkAction } from '@reduxjs/toolkit';
import store from '../store/configureStore';

// Store
import getUser from '../store/getUser';
import loading from '../store/loading';
import openModal from '../store/openModal';

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
      store.dispatch(openModal.actions.setOpenModal('components/Feed'))
      return true
    }
    throw new Error("Error");

  } catch (error) {
    store.dispatch(getUser.actions.userFetchError())
  }
};

export default fetchUser



