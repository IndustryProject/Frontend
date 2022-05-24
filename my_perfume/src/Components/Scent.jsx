import React,{useEffect, useState} from 'react';
import "./scent.css";
import {Link} from "react-router-dom"
import axios from "axios";
import {ProgressBar} from './ProgressBar.jsx';
import Weather from "./Weather";
const Scent = () =>{
    const postdata = (props) => {
        console.log("post",props);
        // const url = 'https://3.34.132.19/pushTimeScent?scent='+props
        const url = 'https://perfum.site/pushTimeScent?scent='+props
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
    return(
        <div className = "scent_outer">
            
            <div className = "scent_inner">
                
                <div className = "q2"> What kind of scent do you like? </div>
                <div className = "weather">
                <Weather/>
                </div>
                <div className = "q2_content">
                <br/><br/><br/>
                <div className ="content_1">
               
                    <Link to = "/daynight">
                    
                        <div className = "woody" onClick = {()=>{
                            console.log("woody")
                            postdata(1)
                            }}>
                            <img
                            className = "woody_img"
                            src = "https://www.cmn.co.kr/webupload/ckeditor/images/20200827_134035_0068447.jpg"
                            width="100%"
                            height = "80%"
                            >
                            </img>
                            woody
                    
                        </div>
                    </Link>
                    <Link to = "/daynight">
                        <div className = "floral" onClick = {()=>{console.log("floral")
                            postdata(2)
                                }}>
                            <img
                            className = "floral_img"
                            src = "https://mblogthumb-phinf.pstatic.net/20150319_92/annickgoutal_1426730347929w6rNH_JPEG/%BD%BA%C0%A7%C6%AE%C7%C3%B7%CE%B7%B2.jpg?type=w2"
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            floral
                        </div>
                    </Link>
                    <Link to = "/daynight">
                        <div className = "spicy" onClick = {()=>{console.log("spicy")
                            postdata(3)
                            }}>
                            <img
                            className = "spicy_img"
                            src = "https://t1.daumcdn.net/cfile/tistory/997337475AFD41F827"
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            spicy
                        </div>
                    </Link>

                    
                </div>
                <div className ="content_2">
                    <Link to = "/daynight">
                        <div className = "fruity" onClick = {()=>{console.log("fruity")
                            postdata(4)
                            }}>
                            <img
                            className = "fruity_img"
                            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySDz8xR885DjpHa-nB39M_Ytp_GB_eMYLQA&usqp=CAU"
                            width="100%"
                            height = "80%"
                            >
                            </img>
                            fruity
                    
                        </div>
                    </Link>
                    <Link to = "/daynight">
                        <div className = "etc" onClick = {()=>{console.log("fresh")
                            postdata(5)
                            }}>
                            <img
                            className = "etc_img"
                            src = "https://img.hankyung.com/photo/201406/01.8774165.1.jpg"
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            etc
                        </div>
                    </Link>


                   
                </div>
                <div className = "pb">
                <ProgressBar width={400} percent={0.4} pre = {0.2}/>
                </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Scent;