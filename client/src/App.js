import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import {useState,useEffect} from "react";
import Cookies from "js-cookie";

// pages
import { Login , SignUP } from "./pages/auth/auth";
import { Home } from "./pages/home/home";
import { Locate } from './pages/locate/locate';

// components
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>

            <Routes>

              <Route path='/' element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUP/>}/>
              <Route path='/locate' element={<ProtectedRoute> <Locate/> </ProtectedRoute>}/>

            </Routes>

        </Router>
    </div>
  );
}

const ProtectedRoute = ({ children, ...rest }) => {
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  useEffect(() => {
      if (!Cookies.get("access_token")) {
        setIsUnauthorized(true);
      }
  }, []);

  if (isUnauthorized) {
    return <Navigate to="/login" />
  }

  return children;
};

export default App;
