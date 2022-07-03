import { createAsyncThunk, isAsyncThunkAction } from '@reduxjs/toolkit';
import { store } from '../store/configureStore';

// Store
import getUser from '../store/getUser';


const fetchToken: isAsyncThunkAction = createAsyncThunk(
  'users/fetchByIdStatus',
  async (token: string) => {
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await response.json();
    console.log(data)
  }
)

// const fetchToken = (token: any) => async (dispatch: any) => {
//   console.log(token)
//   try {
//      dispatch(getToken.actions.tokenFetchStarted())
//     const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     });
//     const data = await response.json();
//     console.log(data)
//     if (data) {
//       store.dispatch(getUser.actions.userFecthSucess(token))
//       return true
//     }
//     throw new Error("Error");

//   } catch (error) {
//     store.dispatch(getUser.actions.userFetchError())
//   }
// };

export default fetchToken



