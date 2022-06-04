import React, { useEffect , useState} from 'react';
import "./season.css";
import {Link} from "react-router-dom";
import axios from "axios";
import Loading from './Loading.jsx';
import {ProgressBar} from './ProgressBar.jsx';
import Weather from "./Weather";

export let pp="false";

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
        
        const url = 'https://2kvx7bcsf5.execute-api.us-east-1.amazonaws.com/version1'
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
       )
         .then((response) => console.log(response))
        
         
         
       ;
     };

    const postdata = (props) => {
        console.log("post",props);
        // const url = 'https://3.34.132.19/pushSeason?seasonId='+props
        const url = 'https://perfum.site/pushSeason?seasonId='+props
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
              <div className = "q4">Which season?</div>
                <div className = "weather">
                <Weather/>
                </div>
                <div className="q2_content">
                <div className ="content_1">

                  <Link to = "/analyzing">
                    <div className = "spring" onClick = {()=>{
                            console.log("spring")
                            setseason(1);
                            handleSubmit(1)}}> 
                      <img
                            className = "spring_img"
                            src = "https://cdn.pixabay.com/photo/2019/03/05/01/59/spring-background-4035402__340.jpg"
                            width="100%"
                            height = "80%"
                            >
                      </img>
                      spring
                    </div>
                  </Link>
                  <Link to = "/analyzing">
                    <div className = "summer" 
                    onClick = {()=>{
                        console.log("summer")
                        setseason(2);
                        handleSubmit(2)}}>
                      <img
                          className = "summer_img"
                          src = "https://cdn.pixabay.com/photo/2017/06/17/18/35/beach-2413081__340.jpg"
                          width="100%"
                          height = "80%"
                          >
                      </img>
                      summer
                    </div>
                  </Link>
                  <Link to = "/analyzing">
                    <div className = "autumn" onClick = {()=>{
                            console.log("autumn")
                            setseason(3);
                            handleSubmit(3)}}>
                      <img
                          className = "autumn_img"
                          src = "https://cdn.pixabay.com/photo/2021/09/13/07/57/trees-6620586__340.png"
                          width="100%"
                          height = "80%"
                          >
                      </img>
                      autumn
                    </div>
                  </Link>
                </div>
                <div className ="content_2">
                  <Link to = "/analyzing">
                    <div className = "winter" onClick = {()=>{
                            console.log("winter")
                            setseason(4);
                            handleSubmit(4)}}>
                      <img
                          className = "winter_img"
                          src = "https://cdn.pixabay.com/photo/2020/01/04/18/40/trees-4741364__340.png"
                          width="100%"
                          height = "80%"
                          >
                      </img>
                      winter
                    </div>
                  </Link>
                  <Link to = "/analyzing">
                    <div className = "four_season"
                    onClick = {()=>{
                        console.log("four_season")
                        setseason(5);
                        handleSubmit(5)}}>
                      <img
                          className = "four_season_img"
                          src = "https://media.istockphoto.com/photos/colourful-seasonal-leaf-picture-id519089645?b=1&k=20&m=519089645&s=170667a&w=0&h=oam7nPu9xtOczAnQj6TxYJ5nKCqu-JV90CriGh2fEA4="
                          width="100%"
                          height = "80%"
                          >
                      </img>
                      all
                    </div>
                  </Link>
                </div>    
                <div className = "pb">
                  <ProgressBar width={400} percent={1} pre = {0.8}/>
                </div>
                </div>
                
            </div>
        </div>
    )
}


export default Season;