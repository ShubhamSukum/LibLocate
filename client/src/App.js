import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


// components
import { Navbar } from "./components/Navbar/navbar"

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
            <Routes>
              
            </Routes>
        </Router>
    </div>
  );
}

export default App;
