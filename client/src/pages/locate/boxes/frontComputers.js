import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../locate.css";

export const FrontComputers = () => {
  const [data, setData] = useState([]);
  const [wall,SetWall]=useState([]);

  useEffect(() => {
    // console.log("frontComputer");
    axios
      .get("http://localhost:3001/pict0/frontComputers")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .get("http://localhost:3001/pict0/frontWall")
      .then((res) => {
        SetWall(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);

  return (
    <div className="centering" style={{ height: "80vh", width: "100vw" }}>
      <div
        style={{
          position: "relative",
          width: "80vw",
          height: "5vh",
          marginBottom: "5vh",
        }}
      >
        <Link to={"/locate"} className="btn btn-light lefty">
          Back to Locate
        </Link>
        <h1 style={{ display: "inline-block", color: "white" }} className="fw-bold">
          Front Computers
        </h1>
      </div>

      <div className="Front-Computer-Area">
        <div className="PCies">
          {data.map((val, index) => (
              <button
                className={`PC ${val.state === 1 ? "green-button" : "white-button"}`}
                key={index} title={val.user}
              >
                🖥️
              </button>
            ))}
        </div>

        <div className="PCies-wall">
          {wall.map((val, index) => (
              <button className={`B buty ${val.state === 1 ? "green-button" : "white-button"}`}  key={index}>🪑</button>
            ))}
        </div>
      </div>
    </div>
  );
};

// import { useState ,useEffect} from "react";
// import {Link} from "react-router-dom";
// import axios from "axios";
// import "../locate.css";

// // White and Grey
// export const FrontComputers=()=>{
//     const [data,setData]= useState([]);
//     const color1="white";

//     useEffect(()=>{
//         console.log("frontComputer");
//         axios.get("http://localhost:3001/pict0/frontComputers")
//         .then((res)=>{
//             setData(res.data[0])
//             console.log(res.data[0])
//             // console.log(res.data[0]);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     },[])

//     return(<div className="centering" style={{height:"80vh",width:"100vw"}}>

//             <div style={{position:"relative",width:"80vw",height:"5vh",marginBottom:"5vh"}}>
//                 <Link to={"/locate"} className="btn btn-light lefty">Back to Locate</Link>
//                 <h1 style={{display:"inline-block",color:"white"}} className="fw-bold">Front Computers</h1>
//             </div>

            
//             <div className="Front-Computer-Area">
//                 <div className="PCies">
//                     {/* <button className="PC" style={{background:{color1}}}>🖥️</button>
//                     <button className="PC" style={{background:{color1}}}>🖥️</button>
//                     <button className="PC" style={{background:{color1}}}>🖥️</button> */}

//                     {
//                         data.map((val,index)=>{
//                             return(<>
//                                 <h1>{val}</h1>
//                             </>)
//                         })
//                     }

//                 </div>

//                 <div className="PCies-wall">
//                     <button className="B buty"></button>
//                     <button className="B buty"></button>
//                     <button className="B buty"></button>
//                     <button className="B buty"></button>
//                     <button className="B buty"></button>
//                     <button className="B buty"></button>
//                 </div>
//             </div>
//     </div>)
// }

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../locate.css";

// export const FrontComputers = () => {
//   const [data, setData] = useState([]);
//   const color1 = "white";

//   useEffect(() => {
//     console.log("frontComputer");
//     axios
//       .get("http://localhost:3001/pict0/frontComputers")
//       .then((res) => {
//         setData(res.data[0]);
//         console.log(res.data[0]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="centering" style={{ height: "80vh", width: "100vw" }}>
//       <div
//         style={{
//           position: "relative",
//           width: "80vw",
//           height: "5vh",
//           marginBottom: "5vh",
//         }}
//       >
//         <Link to={"/locate"} className="btn btn-light lefty">
//           Back to Locate
//         </Link>
//         <h1 style={{ display: "inline-block", color: "white" }} className="fw-bold">
//           Front Computers
//         </h1>
//       </div>

//       <div className="Front-Computer-Area">
//         <div className="PCies">
//           {data.computers &&
//             data.computers.map((val, index) => (
//               <button className="PC" style={{ background: color1 }} key={index}>
//                 {val === 1 ? "🖥️" : " "} {/* Render "🖥️" if val is 1, otherwise, render a space */}
//               </button>
//             ))}
//         </div>

//         <div className="PCies-wall">
//           {data.wall &&
//             data.wall.map((val, index) => (
//               <button className="B buty" key={index}></button>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };
