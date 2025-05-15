import AccountContainer from "../components/account/AccountContainer"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"


const Account = () => {
  return (
    <div className="bg-gray-50 w-full relative h-full">
        <Header/>
        <AccountContainer/>
        <Footer/>
    </div>
  )
}

export default Account