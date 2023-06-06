import {Link} from "react-router-dom";
import {GoogleOAuthProvider,GoogleLogin} from "@react-oauth/google";
// googleLogout
import "./auth.css";

const client_Id=process.env.REACT_APP_ClientId;

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

export const SignUP=()=>{
    const user=false;
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
                            onSuccess={(res)=>console.log(res)}
                            onError={()=>{console.log("Error Occured")}}
                        />
                    </center>
                )
            }
        </div>

        </GoogleOAuthProvider>

        
    </div>)
}

