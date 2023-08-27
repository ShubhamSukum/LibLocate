import "./navstyle.css";
import {Link} from "react-router-dom";

export const Navbar=()=>{
    return(<>
        <center>
            <nav className="flexy navbar">
                    <Link to="/" className="navbar-brand fw-bold whity">Home</Link>
                    <Link to="/locate" className="navbar-brand fw-bold whity">Locate</Link>
                    <Link to="/signup" className="navbar-brand fw-bold whity">Sign Up</Link>
                    <Link to="/login" className="navbar-brand fw-bold whity">Login In</Link>
            </nav>
        </center>

    </>)
}
