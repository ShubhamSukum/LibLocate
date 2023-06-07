import {Link} from "react-router-dom";
import {GoogleOAuthProvider,GoogleLogin,googleLogout} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./auth.css";

const client_Id=process.env.REACT_APP_ClientId;
const googleApi=process.env.REACT_APP_googleApi;

export const Login=()=>{
    return(<div className="page-body w-50 mx-auto p-5 mt-4 border shadow">
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
                <p style={{color:"black",fontSize:"2vh"}} className="fw-bold" >NEW HERE??</p>
                <h3 className="fw-bold">Create new account </h3>
                <Link to={"/signup"} className="btn btn-info fw-bold">Sign UP</Link>
            </form>
    </div>)
}

// ******************************************* Sign UP ********************************************** //

export const SignUP=()=>{
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
        

        await axios.post(`http://localhost:3001${googleApi}`,user)
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
            alert(err);
        });

    }

    return(
    <div className="page-body w-50 mx-auto p-5 mt-4 border shadow">
        <GoogleOAuthProvider
            clientId={client_Id}
        >
            <h1 className="fw-bold">Sign Up</h1>

            <form>
                <br/>
                <input type="text" className="form-control" placeholder="Username"/>
                <br/>
                <input type="password" className="form-control" placeholder="Password"/>
                <br/>
                <button className="btn btn-primary">Sign UP</button>
                <br/>
                <br/>
                <hr/>

                <span style={{color:"black",fontSize:"3vh"}} className="fw-bold" >
                    Wanna Login➡
                    <Link to={"/login"} className="btn btn-info mx-2 fw-bold">Log In</Link>  
                </span>
                
            </form>

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

        </GoogleOAuthProvider>

        
    </div>)
}

// 2:26:18 (Logout Functionality)  => https://youtu.be/CcBHZ0t2Qwc?t=8778 
// 1:55;28 (Google Sign) => https://youtu.be/CcBHZ0t2Qwc?t=6928 