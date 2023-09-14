import "../locate.css";
import {CommonNav} from "../commonNav";

export const NonElectric=()=>{
    return(<>
        <div className="centering" style={{ height: "87vh", width: "100vw" }}>
            <CommonNav name="NON ELECTRIC TABLES"/>
            
            <div className="nonELEC-area">
                <div className="nonELEC-area-right"></div>
                <div className="nonELEC-area-info"></div>
                <div className="nonELEC-area-left"></div>
            </div>
        </div>

    </>)
};