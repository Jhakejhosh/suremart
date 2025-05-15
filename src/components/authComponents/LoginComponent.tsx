import AuthContainer from "../../utils/AuthContainer"
import AuthSegment from "../../utils/AuthSegment"
import LoginForm from "./LoginForm"



const LoginComponent = () => {
  return (
    <>
      <AuthContainer>
        <AuthSegment heading="Welcome Back!" text="Ready to dive
         into new products? Sign in and get back to exploring top items and exclusive deals!"><LoginForm/></AuthSegment>
      </AuthContainer>
    </>
  )
}

export default LoginComponent