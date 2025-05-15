import AuthContainer from "../../utils/AuthContainer"
import AuthSegment from "../../utils/AuthSegment"
import RegisterForm from "./RegisterForm"



const RegisterComponent = () => {
  return (
    <>
      <AuthContainer>
        <AuthSegment heading="Ready to explore?" text="Sign up now to explore latest 
        products, get personalized offers and enjoy the joy the product offers you!"><RegisterForm/></AuthSegment>
      </AuthContainer>
    </>
  )
}

export default RegisterComponent