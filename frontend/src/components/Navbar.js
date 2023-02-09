import {Link} from 'react-router-dom'
//this link component handles the routing locally in the browser instead of requesting from the server


//Conditional rednering using in line operators! https://reactjs.org/docs/conditional-rendering.html

import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

const Navbar = () =>{
    const {logout} = useLogout()
    const {user} = useAuthContext()

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
                {user &&(<div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>)}

                {!user &&(<div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>)}
            </nav>
        </div>
        </header>
    )
}

export default Navbar

