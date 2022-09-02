import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        }
        state.cartItems.push(tempProduct)
      }
    },
    removeProduct: (state, action) => {
      const newCart = state.cartItems.filter(
        (prod) => prod.id !== action.payload
      )
      state.cartItems = newCart
    },
    addItem: (state, action) => {
      const addItemCart = state.cartItems.find(
        (prod) => prod.id === action.payload
      )
      addItemCart.cartQuantity++
    },

    quitItem: (state, action) => {
      const quitItemCart = state.cartItems.find(
        (prod) => prod.id === action.payload
      )
      quitItemCart.cartQuantity--
    },
  },
})
export const { addToCart, removeProduct, addItem, quitItem, cartQuantity } =
  cartSlice.actions
export default cartSlice.reducer
