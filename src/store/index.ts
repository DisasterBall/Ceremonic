import { configureStore } from "@reduxjs/toolkit"
import authProviderReducer from "./authProviderSlice"
import userReducer from "./userSlice"

const store =  configureStore({
    reducer: {
        authProviderInfo: authProviderReducer,
        userInfo: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;