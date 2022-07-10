import { createSlice } from "@reduxjs/toolkit";

type tokenType = string

interface initialStateInterface {
  data: null | tokenType,
  error: boolean,
  meta: {
    user: {
      name: string,
      password: string
    }
  }
}

interface actionTokenStartedType {
  payload: {
    username: string
    password: string
  };
  type: string
}

const initialState: initialStateInterface = {
  data: null,
  error: false,
  meta: {
    user: {
      name: '',
      password: ''
    }
  }
}

const getToken = createSlice({
  name: 'getToken',
  initialState,
  reducers :{
    tokenFetchStarted(state, action: actionTokenStartedType) {
      state.meta.user.name = action.payload.username
      state.meta.user.password = action.payload.password
    },
    tokenFecthSucess(state, action) {
      state.data = action.payload
    },
    tokenFetchError(state) {
      state.data = null
      state.error = true
    }
  }
})

export default getToken