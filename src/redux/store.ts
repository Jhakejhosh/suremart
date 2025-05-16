import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import cartReducer from "./cartSlice"
import addressReducer from './addressSlice'
import wishlistReducer from './wishlistSlice'
import { api } from "./apiSlice"



export const store = configureStore({
    reducer: {
        auth: authReducer,
        [api.reducerPath]: api.reducer,
        cart: cartReducer,
        address: addressReducer,
        wishlist: wishlistReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch