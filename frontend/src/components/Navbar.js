import {Link} from 'react-router-dom'
//this link component handles the routing locally in the browser instead of requesting from the server

const Navbar = () =>{
    return(
        <header>
        <div className = "container">
            <Link to="/">
            <h1>Workout Buddy</h1>
            </Link>
        </div>
        </header>
    )
}

export default Navbar