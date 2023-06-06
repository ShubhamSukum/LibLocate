import {Link} from "react-router-dom";
import {GoogleOAuthProvider,GoogleLogin,googleLogout} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./auth.css";

const client_Id=process.env.REACT_APP_ClientId;
const googleApi=process.env.REACT_APP_googleApi;

export const Login=()=>{
    return(<div className="page-body">
        
            <h1>Log In</h1>
            <form>
                <br/>
                <input type="text" placeholder="Username"/>
                <br/>
                <input type="password" placeholder="Password"/>
                <br/>
                <button>Login</button>
                <br/>
                <br/>
                <Link to={"/signup"}>Sign UP</Link>
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
    <div className="page-body">
        <GoogleOAuthProvider
            clientId={client_Id}
        >
            <h1>Sign Up</h1>

            <form>
                <br/>
                <input type="text" placeholder="Username"/>
                <br/>
                <input type="password" placeholder="Password"/>
                <br/>
                <button>Sign UP</button>
                <br/>
                <br/>
                {/* <Link to={"/login"}>Log In</Link> */}
            </form>

            <div>
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