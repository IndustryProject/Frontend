import React, { useEffect , useState} from 'react';
import "./season.css";
import {Link} from "react-router-dom";
import axios from "axios";
import Loading from './Loading.jsx';
import {ProgressBar} from './ProgressBar.jsx';




const Season = () =>{
    let a = "result";

    const [perfume_season, setseason] = useState();
    const handleSubmit = event =>{
        
        //setprice(e.target.price.value);
        //console.log(e.target.price.value);
        
        //console.log(perfume_pprice);
        postdata(event);
        postresult(a);
        

    };

    const postresult = (props) => {
        console.log("post",props);
        const url = '/version3'
       // console.log(JSON.stringify({price:perfume_price}))
       
       // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
       
       axios.post(url
    //     ,JSON.stringify({
    //      price: props
    //    })
       ,
       {
         headers: 
         {"Content-Type": 'application/json'}
       }
       ).then((response) => console.log(response));
     };

    const postdata = (props) => {
        console.log("post",props);
        const url = 'pushSeason?seasonId='+props
        // console.log(fq);
        // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
        
        axios.patch(url,JSON.stringify({
          scent: props
        }),
        {
          headers: 
          {"Content-Type": 'application/json'}
        }
        ).then((response) => console.log(response));
      };
    return (
        <div className = "season_outer">
            <div className = "season_inner">
                <div className="four">
                    <Link to = "/analyzing">
                    <div className = "spring" onClick = {()=>{
                            console.log("spring")
                            setseason(1);
                            handleSubmit(1)}}> 
                    
                    </div>
                    </Link>
                    <Link to = "/analyzing">
                    <div className = "summer" 
                    onClick = {()=>{
                        console.log("summer")
                        setseason(2);
                        handleSubmit(2)}}
                    >

                    </div>
                    </Link>
                    <Link to = "/analyzing">
                    <div className = "autumn" onClick = {()=>{
                            console.log("autumn")
                            setseason(3);
                            handleSubmit(3)}}
                            >

                    </div>
                    </Link>
                    <Link to = "/analyzing">
                    <div className = "winter" onClick = {()=>{
                            console.log("winter")
                            setseason(4);
                            handleSubmit(4)}}
                            >

                    </div>
                    </Link>
                    <Link to = "/analyzing">
                    <div className = "four_season"
                    onClick = {()=>{
                        console.log("four_season")
                        setseason(5);
                        handleSubmit(5)}}
                        >

                    </div>
                    </Link>
                </div>
                <ProgressBar width={400} percent={1} pre = {0.8}/>
            </div>
        </div>
    )
}

export default Season;