import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import CartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: CartReducer,
  },
})
