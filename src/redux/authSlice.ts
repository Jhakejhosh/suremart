import {createSlice} from "@reduxjs/toolkit"

interface UserType {
    id: string | null,
    displayName: string | null,
    email: string | null,
}

interface AuthState {
    user: UserType | null,
    loading: boolean,
    error: string | null
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        clearUser: (state) => {
            state.user = null;
            state.error = null;
            state.loading = false
        }
    }
})

export const {setUser, clearUser, setLoading, setError} = authSlice.actions
export default authSlice.reducer