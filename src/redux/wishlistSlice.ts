import { createSlice } from "@reduxjs/toolkit";

interface WishlistItemType {
    id: number,
    price: number,
    thumbnail: string,
    title: string,
    stock: number
}

interface WishlistState {
    wishlist: WishlistItemType[],
    wishlistPresent: boolean
}

const initialState:WishlistState = {
    wishlist: [],
    wishlistPresent: false
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push({...action.payload})
            state.wishlistPresent = true
        },
        setWishlist: (state, action) => {
            state.wishlistPresent = !action.payload
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
        }
    }
})

export const {addToWishlist, setWishlist, removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer
