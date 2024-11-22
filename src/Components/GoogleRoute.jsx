import { useLocation, Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateToken } from "../store/actions/authActions.js"

export default function GoogleRoute({ children }) {

    const location = useLocation()  // Usa useLocation para obtener la URL completa
    const dispatch = useDispatch()

    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get("token")
    const name = queryParams.get("name")
    const lastName = queryParams.get("lastName")
    const email = queryParams.get("email")
    const photo = queryParams.get("photo")
    if (token) {
        dispatch(updateToken(token))
        // Guardamos los datos en localStorage
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify({ name, lastName, email, photo }))
    
        // Redirigimos al usuario a "/home"
        return <Navigate to="/home" replace />
      }
    
    return children
}
