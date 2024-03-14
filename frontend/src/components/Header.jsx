import { Link, useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { reset, logout } from '../features/auth/authSlice'


function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>Goal Tracker</Link>
            </div>
            <ul>
                {user ? (<li>{
                <div className="logout" onClick={onLogout}>
                    <img src="https://i.imgur.com/RpW5bZR.png" className="icon" alt="logout-icon" />Logout
                </div>}
            </li>) : (<>
            <li>
                <Link to='/login'>
                    <img src="https://i.imgur.com/N9dpdXR.png" className="icon" alt="login-icon"/>Login
                </Link>
                
            </li>
            <li>
                <Link to='/register'>
                    <img src="https://i.imgur.com/pLaz5AU.png" className="icon" alt="register-icon"/>Register
                </Link>
            </li>
                
                </>)}
            </ul>

        </header>
    )
}

export default Header