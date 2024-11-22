import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function PrivateRoute({children}){
    const token = useSelector(state=>state.authStore.token)
    if(!token){
        return <Navigate to="/Login" replace></Navigate>
    }
    return children
}