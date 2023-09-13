import { Link } from "react-router-dom";
import axios from "axios";
import "../locate.css";
import { useEffect, useState } from "react";

export const Boxes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/pict0/boxes").then((res) => {
    //   console.log(res.data);
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
            <div
            key={index} // Add a unique key prop here
            style={{
                border: "2px solid white",
                background: "linear-gradient(rgba(220,220,255,0.4) 85%, rgba(255,255,255,0.5) 100%)"
            }}
            >
            <div className="boxex-main">
                <div className="boxex-row-up">
                <>
                    {info.right.map((val, ind) => {
                    return (
                        <button
                        className={`boxex-buty ${val.state === 1 ? "green-button" : "white-button"}`}
                        key={ind}
                        title={val.user}
                        >
                        🪑
                        </button>
                    );
                    })}

                    <center>
                    <div style={{ border: "solid 1px white", width: "100%" }}></div>
                    </center>

                    {info.left.map((val, ind) => {
                    return (
                        <button
                        className={`boxex-buty ${val.state === 1 ? "green-button" : "white-button"}`}
                        key={ind} // Add a unique key prop here
                        title={val.user}
                        >
                        🪑
                        </button>
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
