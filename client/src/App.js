import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

// pages
import {Login,SignUP} from "./pages/auth/auth";
import {Home} from "./pages/home/home";
import { Locate } from './pages/locate/locate';

// components
import { Navbar } from "./components/Navbar/navbar"

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>

            <Routes>

              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUP/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/locate' element={<Locate/>}/>

            </Routes>

        </Router>
    </div>
  );
}

export default App;
