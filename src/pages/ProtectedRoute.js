import {Outlet,Navigate} from 'react-router'

const ProtectedRoute = ({isLoggedIn})=>{
    return isLoggedIn ? <Outlet/> : <Navigate to = "/"/>
}

export default ProtectedRoute