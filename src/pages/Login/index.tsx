import { getAuth } from "firebase/auth"
import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { ButtonGroup, MainButton, TextButton } from "../../components/Button"
import Form, { useForm } from "../../components/Form"
import StrictInput from "../../components/Form/StrictInput"
import Logo from "../../components/Logo/Logo"
import { login } from "../../features/Auth/authSlice"
import { LoginContent, LoginPageContainer, LoginSection, Messages } from "./styledComponents"


const LoginPage: React.FC = () => {
    const auth = getAuth()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const formError = useForm()
    const dispatch = useAppDispatch()


    let user = auth.currentUser

    //check the error before fire the login function on Redux
    const loginAction = () => {
        if(formError.isError || email === "" || password === "") return formError.setError(true)
        
        dispatch(login({username: email, password: password}))
    }

    return (
        <LoginPageContainer>
            <LoginContent>
                <Logo />
                <h1>Welcome Back!</h1>
                <Messages>
                    <h2>We miss you! Please login to continue :)</h2>
                    <h3>Contact your administrator if there's something wrong with your account!</h3>
                </Messages>
            </LoginContent>
            <LoginSection>
                <Form>
                    <StrictInput value={email} onChange={setEmail} title="Email" type="email"/>
                    <StrictInput value={password} onChange={setPassword} title="Password" type="password"/>
                    <ButtonGroup flow="row">
                        <MainButton onClick={() => loginAction()}>Login</MainButton>
                        <TextButton>Forget Password</TextButton>
                    </ButtonGroup>
                </Form>
            </LoginSection>
        </LoginPageContainer>
    )
}

export default LoginPage