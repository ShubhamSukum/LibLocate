import "../locate.css";
import {CommonNav} from "../commonNav";

export const NonElectric=()=>{
    return(<>
        <div className="centering" style={{ height: "87vh", width: "100vw" }}>
            <CommonNav name="NON ELECTRIC TABLES"/>
            
            <div className="nonELEC-area-out">
                <div className="Lblue nonELEC-area"></div>
                <div className="nonELEC-area-info">
                    <div className="info-up centering">
                        <h1>UPPER PART</h1>
                    </div>
                    <div className="info-down centering">
                        <h1>LOWER PART</h1>
                    </div>
                </div>
                <div className="Lgreen nonELEC-area"></div>
            </div>
        </div>
    </>)
};