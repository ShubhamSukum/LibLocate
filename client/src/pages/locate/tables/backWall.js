import {Link} from "react-router-dom";
import axios from "axios";

import "../locate.css";
import { useEffect, useState } from "react";

export const BackWall=()=>{
    return(<>
        <div className="centering" style={{ height: "80vh", width: "100vw" }}>

            <div className="boxex-center">
                <div style={{
                    position: "relative",
                    width: "80vw",
                    height: "8vh",
                    marginBottom: "2vh",
                    }}
                >
                    <Link to={"/locate"} className="btn btn-light lefty">
                    Back to Locate
                    </Link>

                    <h1 style={{ display: "inline-block", color: "white" }} className="fw-bold">
                        TABLES BACK WALL
                    </h1>
                </div>
            </div>
            
            <div className="table-back-wall">

                <div className="upper-wall">
                    <button className="back-wall-but">🪑</button>
                    <button className="back-wall-but">🪑</button>
                    <button className="back-wall-but">🪑</button>
                    <button className="back-wall-but">🪑</button>
                    <button className="back-wall-but">🪑</button>
                    <button className="back-wall-but">🪑</button>
                </div>

                <div className="lower-wall">
                    <button className="back-wall-but">🪑</button>
                    <button className="back-wall-but">🪑</button>
                    <button className="back-wall-but">🪑</button>
                </div>

            </div>
            
        
        </div>
    </>)
};