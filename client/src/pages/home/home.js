import "./home.css";

import {Link} from "react-router-dom";

export const Home=()=>{
    return(<div className="page-body">
        <Link to={"/news"}><button>NEWS</button></Link>
    </div>)
};