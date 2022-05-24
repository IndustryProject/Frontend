import React, { useEffect , useState} from 'react';
import "./analyzing.css";
import {Link} from "react-router-dom";
import Loading from './Loading.jsx';
import {ProgressBar} from './ProgressBar.jsx';
import analyzing from '../img/analyzing.jpg';
const analyzing_img = <img src={analyzing} width= '40%' height="auto"/>;


const Analyzing = () =>{
    const [ready, setReady] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            // setState()
            setReady(false)
        },7000)
    },[])
    return ready?<Loading/>:(
        <div className = "analyzing_outer">
            <div className = "analyzing_inner">
                <div className = "analyzing_title">Result Analysis Completed</div>
                <br/>
                <div>
                Your taste analysis has been completed
                <br/>
                Check out the perfume that suits your taste
                <br/>
                </div>
                {/* <div className = "analyzing_img">
                    {analyzing_img}
                   
                </div> */}
                <br/>
                <div className = "pb">
            <ProgressBar width={400} percent={1} pre = {0.8}/>
            </div>
                <Link to="/test">
                <button type="button" className = "start_btn custom-btn btn-8" onClick={()=>{
                console.log("to result")
                }}>
                    {/* <img className="img_btn" src="https://img.freepik.com/free-vector/play-button-on-white-background_97458-84.jpg?w=1380"/> */}
                
                <span className = "toresult">only your perfume</span>
            
                </button>
            </Link>
            <br/>
            <br/>

                {/* <div className="div">
                <ProgressBar width={400} percent={this.state.percent} />
            <button
            onClick={() =>
              this.updateProgress("percent", this.state.percent + 0.1)
            }
            >
            Add 10%
            </button>
                </div> */}
            </div>
        </div>
    )
}

export default Analyzing;