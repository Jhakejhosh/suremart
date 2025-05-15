import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AddressFormType {
    address: string,
    city: string,
    state: string,
    phoneNumber: number|null,
    information: string
}

export interface AddressDetailsType {
    id: number,
    address: string,
    city: string,
    state: string,
    phoneNumber: number|null,
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
        setShowAddress: (state, action) => {
            state.showAddressForm = action.payload
        },
        addAddress: (state, action: PayloadAction<AddressFormType>) => {
            state.addressItems.push({
                id: state.addressItems.length + 1,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                phoneNumber: action.payload.phoneNumber,
                information: action.payload.information
            })
            state.showAddressForm = false
        },
        removeAddress: (state, action) => {
            state.addressItems = state.addressItems.filter(item => item.id !== action.payload)
        }
    }
})

export const {setShowAddress, addAddress, removeAddress} = addressSlice.actions
export default addressSlice.reducer