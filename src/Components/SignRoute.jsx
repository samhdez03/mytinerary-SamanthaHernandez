import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function SignRoute({children}){
    const token = useSelector(state=>state.authReducer.token)
    if(token){
        return <Navigate to="/home" replace></Navigate>
    }
    return children
}