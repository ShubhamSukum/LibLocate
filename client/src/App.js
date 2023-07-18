import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

// pages
import { Login , SignUP } from "./pages/auth/auth";
import { Home } from "./pages/home/home";
import { Locate } from './pages/locate/locate';
import { News } from "./components/AdiNews";

// components
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>

            <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUP/>}/>
              <Route path='/locate' element={<Locate/>}/>
              <Route path="/news" element={<News/>}/>

            </Routes>

        </Router>
    </div>
  );
}

export default App;
