import { useAppSelector } from '../../hooks/reduxHook'
import AddressItems from './AddressItems'
import NoAddress from './NoAddress'

const AddressBook = () => {

  const {addressItems} = useAppSelector(state => state.address)

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