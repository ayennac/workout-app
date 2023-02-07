import { BrowserRouter, Routes, Route} from 'react-router-dom'


//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'


//components
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path ="/" element ={< Home/>}/>
        </Routes>
        <Routes>
          <Route path ="/login" element ={< Login/>}/>
        </Routes>
        <Routes>
          <Route path ="/signup" element ={< Signup/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
