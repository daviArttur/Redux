import {  configureStore } from "@reduxjs/toolkit";
import getToken from "./getToken";
import getTokenMiddleware from "../middleware/getToken";

export const store = configureStore({
  reducer: {
    getToken: getToken.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getTokenMiddleware)
})
//{ serializableCheck: false}