import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { app } from "../../api/firebase/initialize.firebase"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { authSelector, checkLogin } from "./authSlice"
import { UserTypes } from "./type"

const RequireAuth: React.FC = () => {
    const location = useLocation()
    const auth = useAppSelector(authSelector)
    const dispatch = useAppDispatch()
    const user = auth.user

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
    },[])

    if(auth.loading) return <>Loading</>

    if(user)
    return(
        <>
            <Outlet />
        </>
    )
    

    return(
        <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth