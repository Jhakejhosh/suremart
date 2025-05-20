import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import Button from '../../utils/Button'
import { addAddress } from '../../redux/addressSlice'
import { toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'

const AddressForm = () => {

    const {showAddressForm, addressItems} = useAppSelector(state => state.address)
    const {user} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phoneNumber, setPhoneNumber] = useState<number>(0)
    const [information, setInformation] = useState('')

    const handleAddAddress = async(e: React.FormEvent) => {
        e.preventDefault()
        try {
            const addressDetail = {
                address: address, 
                city: city, 
                state: state, 
                phoneNumber: phoneNumber, 
                information: information
            }
            //Save to firestore
           await addDoc(collection(db, "Addresses"), addressDetail) 
            
            // Save to Redux
            dispatch(addAddress({
                id: user!.id,
                ...addressDetail
            }))
            console.log(user?.id)
            console.log(addressItems)

        } catch (error) {
            toast.error(`${error}`)
        }
        toast.success("Address successfully added")
    }

  return (
    <div className={`${showAddressForm ? 'block' : 'hidden'} mt-6 flex justify-center items-center`}>
        <div className='w-full md:w-[50%] bg-white'>
            <div className='p-4 w-full border-b-2 border-gray-100'>
                <strong>Add New Address</strong>
            </div>
            <form className='p-4' onSubmit={handleAddAddress}>
                <div className='block w-full mb-2'>
                    <label className=''>Address</label>
                    <input type="text" placeholder='Enter your address' onChange={e =>
                        setAddress(e.target.value)
                    } value={address} className='w-full border-2 border-gray-100 p-2 placeholder:text-[15px]
                    rounded-sm px-6 mt-2' required/>
                </div>
                <div className='block w-full mb-2'>
                    <label className=''>City</label>
                    <input type="text" placeholder='Enter your city' onChange={e =>
                        setCity(e.target.value)
                    } value={city} className='w-full border-2 border-gray-100 p-2 placeholder:text-[15px]
                    rounded-sm px-6 mt-2' required/>
                </div>
                <div className='block w-full mb-2'>
                    <label className=''>State</label>
                    <input type="text" placeholder='Enter your state' onChange={e =>
                        setState(e.target.value)
                    } value={state} className='w-full border-2 border-gray-100 p-2 placeholder:text-[15px]
                    rounded-sm px-6 mt-2' required/>
                </div>
                <div className='block w-full mb-2'>
                    <label className=''>Phone number</label>
                    <input type="number" placeholder='Enter your phone number' onChange={e =>
                        setPhoneNumber(Number(e.target.value))
                    } value={phoneNumber!} className='w-full border-2 border-gray-100 p-2 placeholder:text-[15px]
                    rounded-sm px-6 mt-2' required/>
                </div>
                <div className='block w-full mb-2'>
                    <label className=''>Additional Information</label>
                    <textarea placeholder='Enter Additional Information' onChange={e =>
                        setInformation(e.target.value)
                    } value={information} className='w-full border-2 border-gray-100 p-2 placeholder:text-[15px]
                    rounded-sm px-6 mt-2' required/>
                </div>
                <Button label='Save Address'/>
            </form>
        </div>
    </div>
  )
}

export default AddressForm