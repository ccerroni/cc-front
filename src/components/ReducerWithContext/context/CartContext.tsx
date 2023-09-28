import { createContext, useContext, useReducer } from "react";
import { Product } from "../models/product";

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART'
}

export interface CartState {
  items: Product[],
  addToCart: (item: Product) => void,
  removeFromCart: (item: Product) => void,
  clearCart: () => void
}

export interface CartAction {
  type: ActionTypes,
  payload?: Product
}

const initialState: CartState = {
  items: [],
  addToCart : () =>{},
  removeFromCart: () =>{},
  clearCart: () => {}
}

const CartContext = createContext(initialState);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload as Product] }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload?.id)
      }
    case ActionTypes.CLEAR_CART:
      return { ...state, items: [] }
    default:
      return state
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

  const [cartState, dispatch] = useReducer(cartReducer, initialState)

  const contextValue = {
    ...cartState,
    addToCart: (item: Product) => {
      dispatch(
        {
          type: ActionTypes.ADD_TO_CART,
          payload: item
        })
    },
    removeFromCart: (item: Product) => {
      dispatch({
        type: ActionTypes.REMOVE_FROM_CART,
        payload: item
      })
    },
    clearCart: () => {
      dispatch({
        type: ActionTypes.CLEAR_CART
      })
    }
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const contextValue = useContext(CartContext)
  if (!contextValue) {
    throw new Error('useCartContext must be used withing CartProvider')
  }
  return {
    ...contextValue
  };
}