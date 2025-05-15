import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook"
import { MdDelete } from "react-icons/md"
import { removeAddress } from "../../redux/addressSlice"
import { toast } from "react-toastify"


const AddressItems = () => {

    const {addressItems} = useAppSelector(state => state.address)
    const {user} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const handleRemoveAddress = (id: number) => {
        dispatch(removeAddress(id))
        toast.info("Address removed from address book")
    }

  return (
    <div>
        <p className="text-lg pb-4">Your shipping address</p>
        <div className="text-gray-500 text-[15px]">
                {addressItems.map(item => {
                    const {id, city, address, state, phoneNumber} = item;
                    return (
                        <div key={id}>
                            <p>{user?.displayName}</p>
                            <p>{address}</p>
                            <p>{city}, {state}</p>
                            <div className="flex justify-between items-center">
                                <p>{phoneNumber}</p>
                                <span className="text-lg bg-transparent-blue 
                                text-banner-blue" onClick={() => handleRemoveAddress(id)}><MdDelete/></span>
                            </div>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default AddressItems