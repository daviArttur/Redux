import { createSlice } from "@reduxjs/toolkit";

type tokenType = string

interface initialStateInterface {
  data: null | tokenType,
  error: boolean,
  meta: {
    loading: boolean,
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
    loading: false,
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
      state.meta.loading = true
      state.meta.user.name = action.payload.username
      state.meta.user.password = action.payload.password
    },
    tokenFecthSucess(state, action) {
      state.meta.loading = false
      state.data = action.payload
    },
    tokenFetchError(state) {
      state.meta.loading = false
      state.data = null
      state.error = true
    }
  }
})

export default getToken