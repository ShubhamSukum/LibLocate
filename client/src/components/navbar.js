import "./navstyle.css";
import {Link} from "react-router-dom";

export const Navbar=()=>{
    return(<>
        <center>
            <nav className="navbar">
                    <Link to="/" className="navbar-brand fw-bold">Home</Link>
                    <Link to="/locate" className="navbar-brand fw-bold">Locate</Link>
                    <Link to="/signup" className="navbar-brand fw-bold">Sign Up</Link>
                    <Link to="/login" className="navbar-brand fw-bold">Login In</Link>
            </nav>
        </center>

    </>)
}
