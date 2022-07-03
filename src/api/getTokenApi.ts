import getToken from '../store/getToken';
import { Dispatch } from "react"
import { AnyAction } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

type userType = {
  username: string,
  password: string
}
// const fetchToken = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId: any, thunkAPI) => {
//     const response = await fetch(
//       'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({username: 'dog', password: 'dog'}),
//       },
//     );
//     console.log(response)
//     return response
//   }
// )

const fetchToken = (user: userType) => async (dispatch: Dispatch<AnyAction>) => {
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
      return true
    }
    throw new Error("Error");

  } catch (error) {
    dispatch(getToken.actions.tokenFetchError())
  }
};

export default fetchToken


// const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
//   method: 'GET',
//   headers: {
//     Authorization: 'Bearer ' + token,
//   },
// });
// const data = await response.json();
