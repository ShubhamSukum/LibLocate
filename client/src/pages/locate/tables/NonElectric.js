import {useState,useEffect} from "react";
import axios from "axios";

import {CommonNav} from "../commonNav";
import "../locate.css";

export const NonElectric=()=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/pict0/nonElecTable")
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[]);

    return(<>
        <div className="centering" style={{ height: "87vh", width: "100vw" }}>
            <CommonNav name="NON ELECTRIC TABLES"/>
            
            <div className="nonELEC-area-out">
                <div className="Lblue nonELEC-area">
                    {
                        data.map((info,index)=>{
                            if(info.area==="blue"){
                                return(
                                    <div className="elec-table" key={index}>
                                        <button 
                                         className={`R elec-but ${info.right.state === 1 ? "green-button" : "white-button"}`}
                                         title={info.right.user}>
                                            🪑
                                        </button>

                                        <button 
                                         className={`T elec-but ${info.top.state === 1 ? "green-button" : "white-button"}`}
                                         title={info.top.user}>
                                            🪑
                                        </button>

                                        <button 
                                         className={`L elec-but ${info.left.state === 1 ? "green-button" : "white-button"}`}
                                         title={info.left.user}>
                                            🪑
                                        </button>

                                        <button 
                                         className={`D elec-but ${info.bottom.state === 1 ? "green-button" : "white-button"}`}
                                         title={info.bottom.user}>
                                            🪑
                                        </button>

                                        <div className="middle-box"></div>
                                    </div>
                                )
                            }else return null;
                        })
                    }
                </div>

                {/* INFO PART */}
                <div className="nonELEC-area-info">
                    <div className="info-up centering">
                        <h1>UPPER PART</h1>
                    </div>
                    <div className="info-down centering">
                        <h1>LOWER PART</h1>
                    </div>
                </div>
                {/* INFO PART */}

                <div className="Lgreen nonELEC-area">                    
                        {/* <div className="elec-table"> */}

                            {
                                data.map((info,index)=>{
                                    if(info.area==="green"){
                                        return(
                                            <div className="elec-table" key={index}>
                                                <button 
                                                className={`R elec-but ${info.right.state === 1 ? "green-button" : "white-button"}`}
                                                title={info.right.user}>
                                                    🪑
                                                </button>

                                                <button 
                                                className={`T elec-but ${info.top.state === 1 ? "green-button" : "white-button"}`}
                                                title={info.top.user}>
                                                    🪑
                                                </button>

                                                <button 
                                                className={`L elec-but ${info.left.state === 1 ? "green-button" : "white-button"}`}
                                                title={info.left.user}>
                                                    🪑
                                                </button>

                                                <button 
                                                className={`D elec-but ${info.bottom.state === 1 ? "green-button" : "white-button"}`}
                                                title={info.bottom.user}>
                                                    🪑
                                                </button>

                                                <div className="middle-box"></div>
                                            </div>
                                        )
                                    }else return null;
                                })
                            }

                        <div className="p25">
                            <div className="front-row">
                                <button className="fr buty">🪑</button>
                                <button className="fr buty">🪑</button>
                                <button className="fr buty">🪑</button>
                                <button className="fr buty">🪑</button>
                                <button className="fr buty">🪑</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>)
};