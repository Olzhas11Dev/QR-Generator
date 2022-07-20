import React from 'react'
import {Routes, Route, useNavigate} from "react-router-dom";
import {auth, googleProvider,} from "./configFirebase";
import {signInWithPopup} from "firebase/auth";
import Main from '../src/pages/Main'
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import {Navigate} from "react-router";

function App() {
    const [userName, setUserName] = React.useState('')
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const navigate = useNavigate()

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider).then((res) => {
            if (res) {
                setUserName(res?.user?.displayName)
                setIsLoggedIn(true)
                navigate('/main')
            }
        })
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home googleSignIn={googleSignIn}/>}/>
                <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
                    <Route path="/main" element={<Main user={userName}/>}/>}
                </Route>
                <Route path="*" element={ <Navigate to = "/"/>} />
            </Routes>
        </div>
    );
}

export default App;

