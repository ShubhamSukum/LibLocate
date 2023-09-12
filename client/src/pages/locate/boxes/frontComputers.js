import "../locate.css";
import {Link} from "react-router-dom";

// White and Grey
export const FrontComputers=()=>{
    const color1="white";
    return(<div className="centering" style={{height:"80vh",width:"100vw"}}>

            <div style={{position:"relative",width:"80vw",height:"5vh",marginBottom:"5vh"}}>
                <Link to={"/locate"} className="btn btn-light lefty">Back to Locate</Link>
                <h1 style={{display:"inline-block",color:"white"}} className="fw-bold">Front Computers</h1>
            </div>

            
            <div className="Front-Computer-Area">
                <div className="PCies">
                <button className="PC" style={{background:{color1}}}>🖥️</button>
                <button className="PC" style={{background:{color1}}}>🖥️</button>
                <button className="PC" style={{background:{color1}}}>🖥️</button>
                </div>

                <div className="PCies-wall">
                    <button className="B buty"></button>
                    <button className="B buty"></button>
                    <button className="B buty"></button>
                    <button className="B buty"></button>
                    <button className="B buty"></button>
                    <button className="B buty"></button>
                </div>
            </div>
    </div>)
}