import {CommonNav} from "../commonNav.js";

export const BoxesBack=()=>{
    return(<>
        <div className="centering" 
        style={{ height: "89vh", width: "100vw"}}>

            <CommonNav/>
            
            <div className="back-boxes">

                <div className="back-boxes-left-section">
                    <div className="back-boxes-top">

                    </div>

                    {/* <div className="inner-left-section"> */}
                        <div className="back-boxes-left">

                        </div>

                        <div className="back-boxes-center">

                        </div>
                    {/* </div> */}
                
                </div>

                <div className="back-boxes-right-section">

                </div>
                
            </div>

        </div>
    </>)
};