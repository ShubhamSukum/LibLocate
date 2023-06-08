import {Link} from "react-router-dom";
import {GoogleOAuthProvider,GoogleLogin,googleLogout} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./auth.css";
import { useState } from "react";

const client_Id=process.env.REACT_APP_ClientId;
const googleApi=process.env.REACT_APP_googleApi;
const normalApi=process.env.REACT_APP_normalApi;

export const Login=()=>{
     
    const user=false;

    const signed=async(res)=>{
        // console.log(res.credential);
        const decoded=await jwt_decode(res.credential);
        // console.log(decoded);

        const user={
            _id:decoded.sub,
            email:decoded.email,
            username:decoded.given_name,
            profilePic:decoded.picture
        }

        // console.log(user);
        

        await axios.post(`http://localhost:3001/${googleApi}`,user)
        .then((res)=>{
            const username=res.data.username;
            const picture=res.data.profilePic;
            
            if(res.data.message){
                return alert(res.data.message);
            }   

            alert("Username => "+username+"\n Picture => "+picture);

            // console.log(res.data.profilePic ,res.data.username);
        })
        .catch((err)=>{
            console.log(err);
            alert(err);
        });

    }

    return(<div className="page-body w-50 mx-auto p-5 mt-4 border shadow">
        <GoogleOAuthProvider
            clientId={client_Id}
        >
            <h1 className="fw-bold">Log In</h1>
            <form>
                <br/>
                <input type="text" className="form-control" placeholder="Username"/>
                <br/>
                <input type="password" className="form-control" placeholder="Password"/>
                <br/>
                <button className="btn btn-primary fw-bold">Login</button>
                <br/>
                <br/>
                <hr/>

                {
                    user?(
                        <div>Logged In</div>
                    ):(
                        <div className="mt-3">
                            <center>
                                <GoogleLogin
                                    onSuccess={(res)=>{
                                        signed(res);
                                    }}
                                    onError={()=>console.log("GOOGLE Error")}
                                />
                            </center>
                        </div>
                    )
                }

                <br/>
                <p style={{color:"black",fontSize:"2vh"}} className="fw-bold" >NEW HERE ??</p>
                <h3 className="fw-bold">Create new account </h3>
                <Link to={"/signup"} className="btn btn-info fw-bold">Sign UP</Link>
            </form>
        </GoogleOAuthProvider>
    </div>)
}

// ******************************************* Sign UP ********************************************** //

export const SignUP=()=>{
    const [logUsername,setLogUsername]=useState("");
    const [logPass,setLogPass]=useState("");

    const user=false;

    const formsubmit=async(e)=>{
        e.preventDefault();

        await axios.post(`http://localhost:3001/${normalApi}`,{logUsername,logPass})
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const signed=async(res)=>{
        // console.log(res.credential);
        const decoded=await jwt_decode(res.credential);
        // console.log("Login "+ decoded);
        const user={
            _id:decoded.sub,
            email:decoded.email,
            username:decoded.given_name,
            profilePic:decoded.picture
        }

        // console.log(user);

        await axios.post(`http://localhost:3001/${googleApi}`,user)
        .then((res)=>{
            const username=res.data.username;
            const picture=res.data.profilePic;
            
            if(res.data.message){
                return alert(res.data.message);
            }

            alert("Username => "+username+"\n Picture => "+picture)
            // console.log(res.data.profilePic ,res.data.username);
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return(
    <div className="page-body w-50 mx-auto p-5 mt-4 border shadow">
        <GoogleOAuthProvider
            clientId={client_Id}
        >
            <h1 className="fw-bold">Sign Up</h1>

            <form onSubmit={formsubmit}>
                <br/>
                <input type="text" className="form-control" placeholder="Username" 
                    onChange={(e)=>setLogUsername(e.target.value)}/>
                <br/>
                <input type="password" className="form-control" placeholder="Password"
                    onChange={(e)=>setLogPass(e.target.value)}/>
                <br/>
                <button className="btn btn-primary" type="submit">Sign UP</button>
                <br/>
                <br/>
                <hr/>

                <div className="mt-3">
                {
                    user?(
                        <div>Logged In</div>
                    ):(
                        <center>
                            <GoogleLogin
                                onSuccess={(res)=>{
                                    signed(res);
                                }}
                                onError={()=>{console.log("Error Occured")}}
                            />
                        </center>
                    )
                }
                </div>

                <br/>
                <br/>

                <span style={{color:"black",fontSize:"3vh"}} className="fw-bold" >
                    Wanna Login➡
                    <Link to={"/login"} className="btn btn-info mx-2 fw-bold">Log In</Link>  
                </span>
                
            </form>
        </GoogleOAuthProvider>

        
    </div>)
}

// 2:26:18 (Logout Functionality)  => https://youtu.be/CcBHZ0t2Qwc?t=8778 
// 1:55;28 (Google Sign) => https://youtu.be/CcBHZ0t2Qwc?t=6928 


/*          GOOGLE Sign In

            <div className="mt-5">
                {
                    user?(
                        <div>Logged In</div>
                    ):(
                        <center>
                            <GoogleLogin
                                onSuccess={(res)=>{
                                    signed(res);
                                }}
                                onError={()=>{console.log("Error Occured")}}
                            />
                        </center>
                    )
                }
            </div> 
*/