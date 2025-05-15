
import { useAppDispatch } from '../../hooks/reduxHook'
import { setShowAddress } from '../../redux/addressSlice'
import Button from '../../utils/Button'

const NoAddress = () => {

    const dispatch = useAppDispatch()

  return (
    <div>
        <p className='text-gray-500 text-sm mb-8'><i>No address...</i></p>
        <div>
            <Button label="Add your address" onClick={() => dispatch(setShowAddress(true))}/>
        </div>
    </div>
  )
}

export default NoAddress