import "../locate.css";
import {CommonNav} from "../commonNav";

export const RightWall=()=>{
    return(<>
        <div className="centering" 
        style={{ height: "85vh", width: "100vw",marginTop:"1vh"}}>
            <CommonNav name="RIGHT WALL"/>
            <div className="right-wall-rows">
                <div className="walls">
                    <div className="r IN-wall">
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                    </div>
                    <div className="g IN-wall">
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                    </div>
                    <div className="b IN-wall">
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                        <button className="non-electirc-chairs buty">🪑</button>
                    </div>
                </div>

                {/* INFO */}
                <div className="lower">
                    <div className="r lower1">
                        <h1>LEFT</h1>
                    </div>

                    <div className="g lower1">
                        <h1>MIDDLE</h1>
                    </div>

                    <div className="b lower1">
                        <h1>RIGHT</h1>
                    </div>
                </div>
                {/* INFO */}
            </div>
        </div>
    </>)
};