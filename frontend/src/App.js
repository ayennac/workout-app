import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'



//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'


//components
import Navbar from './components/Navbar'



function App() {

  const {user} = useAuthContext()

  //use Navigate to protect the routes once a user is logged in
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path ="/" element ={user ? < Home/> : <Navigate to="/login"/>}/>
        </Routes>
        <Routes>
          <Route path ="/login" element ={!user ? <Login/>: <Navigate to="/"/>}/>
        </Routes>
        <Routes>
          <Route path ="/signup" element ={!user ? <Signup/> : <Navigate to="/"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
