import React, {useEffect, useState} from 'react';
import "./firstquestion.css";
import female from '../img/female.png';
import male from '../img/male.png';
import {Link} from "react-router-dom"
import axios from "axios";
import {ProgressBar} from './ProgressBar.jsx';
const female_img = <img src={female} width= '100%' height='100%'/>;
const male_img = <img src={male} width='100%' height='100%'/>;


const Firstquestion = () =>{
    const [fq, setfq] = useState("");
    let state = {
        percent:0.2
    };
    const updateProgress = (field, val) => {
        this.setState({ [field]: val });
      };
    const postdata = (props) => {
        console.log("post",props);
        setfq(fq === props);
        // console.log(fq);
        // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
        const url = 'pushGender?gender='+props
        axios.post(url,JSON.stringify({
          gender: props
        }),
        {
          headers: 
          {"Content-Type": 'application/json'}
        }
        ).then((response) => console.log(response));
      };
    return (
        <div className= "q1_outer">
            <div className = "q1_inner">
            
                <div className = "q1">Male or Female?</div>
                <div className = "q1_content">
                <Link to="/scent">
                <div className = "female_img" onClick = {()=>{
                    console.log("click female")
                    
                    
                    // console.log(fq)
                    postdata(1)
                }}>
                {female_img}
                </div>
                </Link>

                <Link to="/scent">
                <div className = "gender_img" onClick = {()=>{
                    console.log("click without gender")
                    
                    
                    // console.log(fq)
                    postdata(3)
                }}>
                <img
                src = "https://png.pngtree.com/png-vector/20191201/ourmid/pngtree-male-and-female-gender-signs-icon-circle-png-image_2060974.jpg"
                width = "100%"
                height = "100%"
                >
                </img>
                </div>
                </Link>
                
                <Link to="/scent">
                <div className = "male_img" onClick = {()=>{
                    console.log("click male")
                    
                    postdata(2)
                }}>
                {male_img}
                </div>
                </Link>
                
                </div>
                <br/>
                <br/>
                <div className = "pb">
                <ProgressBar width={400} percent={0.2} pre = {0}/>
                </div>
            </div>
        </div>
        

        
        
        
    );
    
}


export default Firstquestion;