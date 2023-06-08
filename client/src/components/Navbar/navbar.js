import "./navstyle.css";
import {Link} from "react-router-dom";

export const Navbar=()=>{
    return(<>
        <nav>
            <menu>
                <li><Link to="/"> <p title="Home">🏠</p></Link></li>
                <li><Link to="/locate"> <p title="Locate">📍</p></Link></li>
                <li><Link to="/login"> <p title="Log IN / Sign UP">😎</p></Link></li>
            </menu>
        </nav>
    </>)
}
