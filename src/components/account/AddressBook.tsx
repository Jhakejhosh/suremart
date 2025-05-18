import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import AddressItems from './AddressItems'
import NoAddress from './NoAddress'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { AddressDetailsType, setAddress } from '../../redux/addressSlice'

const AddressBook = () => {

  const {addressItems} = useAppSelector(state => state.address)
  const {user} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    //if(user) {
    //const q = query(collection(db, "Addresses"), where("userId", "==", user.id))
    const unSubscribe = onSnapshot(collection(db, "Addresses"), (snapshot) => {
      const addressData = snapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
      })) as AddressDetailsType[];
      dispatch(setAddress(addressData))
      console.log(addressData)
      console.log(user?.id)
    })
    return () => unSubscribe()
  }, [])

  return (
    <div className="w-full border-2 border-gray-100 rounded-sm mt-8 md:mt-0">
        <div className="border-b-2 border-gray-100 p-4">
            <p className='font-semibold'>ADDRESS BOOK</p>
        </div>
        <div className="p-4">
            {addressItems.length === 0 ? <NoAddress/> : <AddressItems/>}
        </div>
    </div>
  )
}

export default AddressBook