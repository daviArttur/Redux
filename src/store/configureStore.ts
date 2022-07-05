import { configureStore } from "@reduxjs/toolkit";
import getToken from "./getToken";
import getTokenMiddleware from "../middleware/getToken";
import getUser from "./getUser";

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    getToken: getToken.reducer,
    getUser: getUser.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getTokenMiddleware)
})

export default store