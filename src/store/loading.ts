import { createSlice } from "@reduxjs/toolkit";


const loading = createSlice({
  name: 'loading',
  initialState: {loading: false},
  reducers: {
    initLoading(state) {
      state.loading = true
    },
    endLoading(state) {
      state.loading = false
    }
  }
})

export default loading