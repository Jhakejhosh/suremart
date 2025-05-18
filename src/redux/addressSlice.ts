import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AddressFormType {
    address: string,
    city: string,
    state: string,
    phoneNumber: number|null,
    information: string
}

export interface AddressDetailsType {
    id: string | null,
    address: string,
    city: string,
    state: string,
    phoneNumber: number,
    information: string
}

interface AddressStateType {
    showAddressForm: boolean,
    addressItems: AddressDetailsType[]
}

const initialState:AddressStateType = {
    showAddressForm: false,
    addressItems: []
}

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setShowAddress: (state, action: PayloadAction<boolean>) => {
            state.showAddressForm = action.payload
        },
        addAddress: (state, action: PayloadAction<AddressDetailsType>) => {
            state.addressItems.push(action.payload)
            state.showAddressForm = false
        },
        removeAddress: (state, action) => {
            state.addressItems = state.addressItems.filter(item => item.id !== action.payload)
        },
        setAddress: (state, action) => {
            state.addressItems = action.payload
        }
    }
})

export const {setShowAddress, addAddress, removeAddress, setAddress} = addressSlice.actions
export default addressSlice.reducer