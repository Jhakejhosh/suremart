import { createSlice } from "@reduxjs/toolkit";

export interface CartItemType {
    id: number,
    price: number,
    thumbnail: string,
    title: string,
    quantity: number
}

export interface CartStateType {
    items: CartItemType[],
    total: number
}

const initialState: CartStateType = {
    items: [],
    total: 0
}

// Save state to LocalStorage
const saveState = (state: CartStateType) => {
    localStorage.setItem("cart", JSON.stringify(state))
}

// Load state from localStorage
const loadState = (): CartStateType => {
    const saveItems = localStorage.getItem("cart")
    return saveItems ? JSON.parse(saveItems) : initialState
}

// Calculate total of all items in the cart
const calculateTotal = (items: CartItemType[]):number => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadState(),
    reducers: {
        // Add to cart
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem) {
                existingItem.quantity += 1
            }else {
                state.items.push({...action.payload, quantity: 1})
            }
            state.total = calculateTotal(state.items)
            saveState(state)
        },
        clearCart: (state) => {
            state.items = [],
            state.total = 0
            saveState(state)
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload),
            state.total= calculateTotal(state.items)
            saveState(state)
        },
        increaseQuantity: (state, action) => {
            const itemIncreased = state.items.find(item =>item.id === action.payload)
            if(itemIncreased) {
                itemIncreased.quantity += 1
            }
            state.total = calculateTotal(state.items)
            saveState(state)
        },
        decreaseQuantity: (state, action) => {
            const itemIncreased = state.items.find(item =>item.id === action.payload)
            if(itemIncreased && itemIncreased?.quantity > 1) {
                itemIncreased.quantity -= 1
            }else {
                state.items = state.items.filter(item => item.id !== action.payload)
            }
            state.total = calculateTotal(state.items)
            saveState(state)
        }
    }
})

export const {addToCart, clearCart, removeFromCart, increaseQuantity,
    decreaseQuantity
} = cartSlice.actions
export default cartSlice.reducer