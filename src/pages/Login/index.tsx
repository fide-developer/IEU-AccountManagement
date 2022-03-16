import { onAuthStateChanged, getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { app } from "../../api/firebase/initialize.firebase"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { ButtonGroup, MainButton, TextButton } from "../../components/Button"
import Form, { useForm } from "../../components/Form"
import StrictInput from "../../components/Form/StrictInput"
import Logo from "../../components/Logo/Logo"
import { authSelector, checkLogin, login } from "../../features/Auth/authSlice"
import { UserTypes } from "../../features/Auth/type"
import { LoginContent, LoginPageContainer, LoginSection, Messages } from "./styledComponents"

type locationType = {
    from: { pathname: string }
}

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const formError = useForm()
    
    const user = useAppSelector(authSelector).user
    const dispatch = useAppDispatch()

    const location = useLocation()
    
    
    useEffect(()=> {
        const authListener = onAuthStateChanged(getAuth(app), user => {

            if(user) {
                let users: UserTypes = {
                    email : user.email,
                    name: "",
                    uid: user.uid
                }
                dispatch(checkLogin(users))
            }

        })

        return authListener
    }, [])

    //check the error before fire the login function on Redux
    const loginAction = () => {
        if(formError.isError || email === "" || password === "") return formError.setError(true)
        
        dispatch(login({username: email, password: password}))
    }
   
    if(user && !user.uid && !user.loading)
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

    //prepare from state
    let locationState = location.state as locationType
    let from = "/"
    if(locationState && 
        locationState.from && 
        locationState.from.pathname && 
        locationState.from.pathname != "/login") {
            from = locationState.from.pathname
    }
    if(user && user.uid && !user.loading)
    return(
        <Navigate to={from} replace/>
    )

    return <>Loading login . . .</>
}

export default LoginPage

function selectorAuth(selectorAuth: any) {
    throw new Error("Function not implemented.")
}
