import "./home.css";

export const Home=()=>{
    return(<div className="home-screen">
        <div className="home-post-area">
            <h1>POSTs</h1>
        </div>

        <div className="home-share-area">
            <h3 style={{color:"white",marginTop:"1vh"}}>SHARE</h3>
            <hr/>
            <form className="form-adjust form-control">
                <h4 style={{color:"white"}}>Title</h4>
                <input type="text" placeholder="Post title" className="post-title home-inputs"/>
                <h4 style={{color:"white"}}>Description</h4>
                <input type="text" placeholder="Post Description" className="post-description home-inputs"/>
                <center><input type="file" className="file-button btn btn-dark" style={{display:"block",marginBottom:"1vh"}}/></center>
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
        </div>
        
    </div>)
};

// css background => background: linear-gradient(rgba(220,220,255,0.4) 85%, rgba(255,255,255,0.5) 100%);