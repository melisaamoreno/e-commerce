import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
  cartItems: [],
  cartTotalProducts: 0,
  cartTotalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
