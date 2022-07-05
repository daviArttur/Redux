import { createSlice } from "@reduxjs/toolkit";

type userType = { 
  id: number
  username: string
  nome: string
  email: string
}

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
  name: 'getUser',
  initialState,
  reducers :{
    userFetchStarted(state) {
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