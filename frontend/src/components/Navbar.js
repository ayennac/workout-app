import {Link} from 'react-router-dom'
//this link component handles the routing locally in the browser instead of requesting from the server

import { useLogout } from '../hooks/useLogout'

const Navbar = () =>{
    const {logout} = useLogout()

    const handleClick =() =>{
        logout()
    }
    return(
        <header>
        <div className = "container">
            <Link to="/">
            <h1>Workout Buddy</h1>
            </Link>
            <nav>
                <div>
                    <button onClick={handleClick}>Log out</button>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </nav>
        </div>
        </header>
    )
}

export default Navbar

