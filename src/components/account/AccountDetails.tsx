import { useAppSelector } from "../../hooks/reduxHook"


const AccountDetails = () => {

   const {user} = useAppSelector(state => state.auth)

  return (
    <div className="w-full border-2 border-gray-100 rounded-sm">
        <div className="border-b-2 border-gray-100 p-4">
            <p className="font-semibold">ACCOUNT DETAILS</p>
        </div>
        <div className="p-4">
            <p className="text-lg font-medium mb-2">{user?.displayName}</p>
            <p className="text-gray-500">{user?.email}</p>
        </div>
    </div>
  )
}

export default AccountDetails