import { useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getUsers, selectAuth } from "./authSlice"


const RequireAuth: React.FC = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const auth = useAppSelector(selectAuth)
    const user = auth.user

    useEffect(() => {
        dispatch(getUsers())
    },[])

    if(auth.loading) return <>Loading</>

    if(user)
    return(
        <>
            here we go again
        </>
    )
    

    return(
        <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth