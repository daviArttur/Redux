import { createSlice } from "@reduxjs/toolkit";

type userType = string

interface initialStateInterface {
  data: null | userType,
  error: boolean,
  meta: {
    loading: boolean,
    user: {
      name: string,
      password: string
    }
  }
}

interface actionUserStartedType {
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

const getUser = createSlice({
  name: 'getToken',
  initialState,
  reducers :{
    userFetchStarted(state, action: actionUserStartedType) {
      state.meta.loading = true
    },
    userFecthSucess(state, action) {
      state.meta.loading = false
      state.data = action.payload
    },
    userFetchError(state) {
      state.meta.loading = false
      state.data = null
      state.error = true
    }
  }
})

export default getUser