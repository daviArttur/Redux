import { configureStore } from "@reduxjs/toolkit";

// Store
import getUser from "./getUser";
import getToken from "./getToken";
import openModal from './openModal'
import loading from './loading'

export type RootStateType = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    token: getToken.reducer,
    user: getUser.reducer,
    openModal: openModal.reducer,
    loading: loading.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store