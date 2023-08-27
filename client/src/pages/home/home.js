import "./home.css";

export const Home=()=>{
    {/* className="page-body"*/}
    return(<div className="home-screen">
        <div className="home-post-area">
            <h1>POSTs</h1>

        </div>

        <div className="home-share-area">
            <h3 style={{color:"white"}}>SHARE</h3>
            <hr/>
            <form>
                <h4 style={{color:"white"}}>Title</h4>
                <input type="text" placeholder="" className="home-inputs"/>
                <h4 style={{color:"white"}}></h4>
                <input type="text" placeholder="" className="home-inputs"/>
            </form>
        </div>
        
    </div>)
};

// css background => background: linear-gradient(rgba(220,220,255,0.4) 85%, rgba(255,255,255,0.5) 100%);