import NavigatedContainer from "../../utils/NavigatedContainer"
import AccountDetails from "./AccountDetails"
import AddressBook from "./AddressBook"
import AddressForm from "./AddressForm"


const AccountContainer = () => {
  return (
    <div className="pt-28 px-4 lg:px-80 relative h-full">
        <NavigatedContainer label="Account Overview">
           <AccountDetails/>
           <AddressBook/>
        </NavigatedContainer>
        <div>
            <AddressForm/>
        </div>
    </div>
  )
}

export default AccountContainer