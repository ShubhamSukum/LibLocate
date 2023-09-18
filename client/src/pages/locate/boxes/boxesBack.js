import { useState, useEffect } from "react";
import axios from "axios";
import { CommonNav } from "../commonNav.js";

export const BoxesBack = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/pict0/backboxes")
            .then((res) => {
                setData(res.data);
            })
    }, [])

    return (
        <>
            <div className="centering"
                style={{ height: "89vh", width: "100vw" }}>

                <CommonNav name="BACK BOXES" />

                <div className="back-boxes">

                    <div className="back-boxes-left-section">

                        <div className="back-boxes-top">
                            {data && data.map((info, index) => {
                                if (info.area === "top") {
                                    return (
                                        <button key={index} className={`ok back-wall-but ${info.state === 1 ? "green-button" : "white-button"}`}>
                                            🪑
                                        </button>
                                    )
                                }
                                return null;
                            })}
                        </div>

                        <div className="back-boxes-left">
                            {data && data.map((info, index) => {
                                if (info.area === "left") {
                                    return (
                                        <button key={index} className={`ok1 back-wall-but ${info.state === 1 ? "green-button" : "white-button"}`}>
                                            🪑
                                        </button>
                                    )
                                }
                                return null;
                            })}
                        </div>

                        <div className="back-boxes-center">

                            <div className="single-table">
                                <button className="right1 chair">🪑</button>
                                <button className="top1 chair">🪑</button>
                                <button className="left1 chair">🪑</button>
                                <button className="bottom1 chair">🪑</button>
                                <div className="center-table"></div>
                            </div>

                            <div className="single-table">
                                <button className="right1 chair">🪑</button>
                                <button className="top1 chair">🪑</button>
                                <button className="left1 chair">🪑</button>
                                <button className="bottom1 chair">🪑</button>
                                <div className="center-table"></div>
                            </div>

                            <div className="single-table">
                                <button className="right1 chair">🪑</button>
                                <button className="top1 chair">🪑</button>
                                <button className="left1 chair">🪑</button>
                                <button className="bottom1 chair">🪑</button>
                                <div className="center-table"></div>
                            </div>

                            <div className="single-table">
                                <button className="right1 chair">🪑</button>
                                <button className="top1 chair">🪑</button>
                                <button className="left1 chair">🪑</button>
                                <button className="bottom1 chair">🪑</button>
                                <div className="center-table"></div>
                            </div>

                            
                        </div>

                    </div>

                    <div className="back-boxes-right-section">
                        {data && data.map((info, index) => {
                            if (info.area === "right") {
                                return (
                                    <button key={index} className={`back-wall-but ${info.state === 1 ? "green-button" : "white-button"}`}>
                                        🪑
                                    </button>
                                )
                            }
                            return null;
                        })}
                    </div>

                </div>
            </div>
        </>
    );
};
