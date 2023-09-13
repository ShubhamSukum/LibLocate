import { Link } from "react-router-dom";
import axios from "axios";
import "../locate.css";
import { useEffect, useState } from "react";

export const Boxes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/pict0/boxes").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="centering" style={{ height: "88vh", width: "100vw"}}>
        {/* KINDA NAV */}
        <div className="boxex-center">
          <div
            style={{
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
              BOXES
            </h1>
          </div>
          {/* KINDA NAV */}

          {data.map((info, index) => {
            return info && (
              <div style={{ border: "2px solid white" }}>
                <div className="boxex-main">
                  <div className="boxex-row-up">
                    <>
                      {info.right.map((val, ind) => {
                        return (
                          <>
                            <button className="boxex-buty">🪑</button>
                          </>
                        );
                      })}
                      
                      <center>
                        <div style={{ border: "solid 1px white", width: "100%" }}></div>
                      </center>

                      {info.left.map((val, ind) => {
                        return (
                          <>
                            <button className="boxex-buty">🪑</button>
                          </>
                        );
                      })}
                    </>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
