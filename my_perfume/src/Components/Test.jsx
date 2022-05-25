import React, {useEffect, useState} from 'react';

import "./test.css";
import {Link} from "react-router-dom";
import axios from 'axios';
import Imf from './Imf';
import Weather from "./Weather";
import greystar from '../img/greystar.jpg';
import bluestar from '../img/bluestar.png';
import ebay_icon from '../img/ebay_icon.png';
const greystar_img = <img src={greystar}/>;
const ebay = <img className="img-ebay" src={ebay_icon} width= '100%' height='100%'/>;



const Test = () => {
    let addCheck1 = "off"
    let addCheck2 = "off"
    const add = (num) =>{
        if(addCheck1=="off" && addCheck2=="off" && num == 1){
            document.getElementsByClassName("iframe2")[0].style.display = "none";
            document.getElementsByClassName("iframe1")[0].style.display = "block";
            addCheck1 = "on"
        }
        else if(addCheck1=="off" && addCheck2=="off" && num == 2){
            document.getElementsByClassName("iframe1")[0].style.display = "none";
            document.getElementsByClassName("iframe2")[0].style.display = "block";
            addCheck2 = "on"
        }
        else if(addCheck1=="on" && addCheck2=="off" && num == 2){
            document.getElementsByClassName("iframe1")[0].style.display = "none";
            document.getElementsByClassName("iframe2")[0].style.display = "block";
            addCheck1 = "off"
            addCheck2 = "on"
        }
        else if(addCheck1=="off" && addCheck2=="on" && num == 1){
            document.getElementsByClassName("iframe2")[0].style.display = "none";
            document.getElementsByClassName("iframe1")[0].style.display = "block";
            addCheck1 = "on"
            addCheck2 = "off"
        }
        else{
            document.getElementsByClassName("iframe1")[0].style.display = "none";
            document.getElementsByClassName("iframe2")[0].style.display = "none";
            addCheck1 = "off"
            addCheck2 = "off"
        }
    }

    const[perfumes, setPerfumes] = useState("");
    const [basenote1, setbasenote1] = useState("");
    const [brand1, setbrand1] = useState("");
    const [middlenote1, setmiddlenote1] = useState("");
    const [name1, setname1] = useState("");
    const [mainAccords1, setmainAccords1] = useState("");
    const [longevityRating1, setlongevityRating1] = useState("");
    const [imageUrl1, seturl1] = useState("");
    const [buyUrl1, setbuyurl1] = useState("");
    const [basenote2, setbasenote2] = useState("");
    const [brand2, setbrand2] = useState("");
    const [middlenote2, setmiddlenote2] = useState("");
    const [name2, setname2] = useState("");
    const [mainAccords2, setmainAccords2] = useState("");
    const [longevityRating2, setlongevityRating2] = useState("");
    const [imageUrl2, seturl2] = useState("");
    const [buyUrl2, setbuyurl2] = useState("");
    const [basenote3, setbasenote3] = useState("");
    const [brand3, setbrand3] = useState("");
    const [middlenote3, setmiddlenote3] = useState("");
    const [name3, setname3] = useState("");
    const [mainAccords3, setmainAccords3] = useState("");
    const [longevityRating3, setlongevityRating3] = useState("");
    const [imageUrl3, seturl3] = useState("");
    const [buyUrl3, setbuyurl3] = useState("");
    const [add_image1,setaddimage1] = useState("");
    const [add_image2,setaddimage2] = useState("");
    

    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response =>{
        // {/*'https://jsonplaceholder.typicode.com/users'*/}
        //     setUsers(response.data);
        // });
        axios.get('https://perfum.site/filtering?standard=2').then(response=>{
            console.log(response.data)
            setaddimage1(response.data[0].imageUrl);
            setaddimage2(response.data[1].imageUrl);
        })
        axios.get('https://perfum.site/filtering?standard=1',
        {
          headers:
          { 
            //"x-access-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NDA1OTk4MDcsImV4cCI6MTY3MjEzNTgwNywic3ViIjoidXNlckluZm8ifQ.FFgxskXgUuT2ARN0wKMF2K_YhxyhrLJ_8jfz7YE207Q'
            
          }
        })
        .then(response =>{
            console.log(response.data);
            setname1(response.data[0].name);
            setbasenote1(response.data[0].baseNote);
            setbrand1(response.data[0].brand);
            setmiddlenote1(response.data[0].middleNote);
            setlongevityRating1(response.data[0].longevityRating);
            seturl1(response.data[0].imageUrl);
            setbuyurl1(response.data[0].buyUrl);
            setmainAccords1(response.data[0].mainAccords);
            setname2(response.data[1].name);
            setbasenote2(response.data[1].baseNote);
            setbrand2(response.data[1].brand);
            setmiddlenote2(response.data[1].middleNote);
            setlongevityRating2(response.data[1].longevityRating);
            seturl2(response.data[1].imageUrl);
            setbuyurl2(response.data[1].buyUrl);
            setmainAccords2(response.data[1].mainAccords);
            setname3(response.data[2].name);
            setbasenote3(response.data[2].baseNote);
            setbrand3(response.data[2].brand);
            setmiddlenote3(response.data[2].middleNote);
            setlongevityRating3(response.data[2].longevityRating);
            seturl3(response.data[2].imageUrl);
            setbuyurl3(response.data[2].buyUrl);
            setmainAccords3(response.data[2].mainAccords);
        });
    },[]);
    return(
        <div className = "test_outer">
            <div className = "test_inner">
                <div className = "result">Perfume for you</div>
                <div className = "weather">
                <Weather/>
                </div>
                <div className = "test_all">
                <div className = "no1">
                    <div className = "img1">
                        <img
                            
                            src = {imageUrl1}
                            alt=""
                            width = "250"
                            height = "250"
                        ></img>
                    </div>

                    <div className = "img1_im">
                        이름 : {name1}<br/><br/>
                        분위기 : {mainAccords1}<br/><br/>
                        지속시간 : {longevityRating1}<br/><br/>
                        베이스 노트 : {basenote1}<br/><br/>
                        미들 노트 : {middlenote1}<br/>
                        
                    </div>
                    
                    
                    
                    <div><a href={buyUrl1} target='_blank' className="buyPerfume">{ebay}</a></div>
                </div>
                
                <br/>
                <br/>
                <br/>
                <div className = "no2">
                <div className = "img2">
                        <img
                            
                            src = {imageUrl2}
                            alt=""
                            width = "250"
                            height = "250"
                        ></img>
                    </div>
                    <div className = "img2_im">
                        이름 : {name2}<br/><br/>
                        분위기 : {mainAccords2}<br/><br/>
                        지속시간 : {longevityRating2}<br/><br/>
                        베이스 노트 : {basenote2}<br/><br/>
                        미들 노트 : {middlenote2}<br/>
                        
                    </div>
                    <div><a href={buyUrl2} target='_blank' className="buyPerfume">{ebay}</a></div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className = "no3">
                <div className = "img3">
                        <img
                            
                            src = {imageUrl3}
                            alt=""
                            width = "250"
                            height = "250"
                        ></img>
                    </div>
                    <div className = "img3_im">
                        이름 : {name3}<br/><br/>
                        분위기 : {mainAccords3}<br/><br/>
                        지속시간 : {longevityRating3}<br/><br/>
                        베이스 노트 : {basenote3}<br/><br/>
                        미들 노트 : {middlenote3}<br/>
                        
                    </div>
                    <div><a href={buyUrl3} target='_blank' className="buyPerfume">{ebay}</a></div>
                </div>
                <div className = "starrate">
                <form
                        onSubmit={function(event){
                            event.preventDefault();
                            console.log(event.target.star3.value);
                            // setstar3(event.target);
                            // handleSubmit(event);
                        }}     
                        >
                        <div className="startRadio">
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "0.5" id=""/>
                            <span className="startRadio__img"><span className="blind">별 0.5개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "1"id=""/>
                            <span className="startRadio__img"><span className="blind">별 1개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "1.5"id=""/>
                            <span className="startRadio__img"><span className="blind">별 1.5개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "2"id=""/>
                            <span className="startRadio__img"><span className="blind">별 2개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "2.5" id=""/>
                            <span className="startRadio__img"><span className="blind">별 2.5개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "3" id=""/>
                            <span className="startRadio__img"><span className="blind">별 3개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "3.5" id=""/>
                            <span className="startRadio__img"><span className="blind">별 3.5개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "4" id=""/>
                            <span className="startRadio__img"><span className="blind">별 4개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "4.5" id=""/>
                            <span className="startRadio__img"><span className="blind">별 4.5개</span></span>
                        </label>
                        <label className="startRadio__box">
                            <input type="radio" name="star3" value = "5" id=""/>
                            <span className="startRadio__img"><span className="blind">별 5개</span></span>
                        </label>
                        <input type = "submit" value = "submit" className = "btn" onClick ={function(event){
                        console.log("click")

                        
                    }}/>
                        </div>
                        </form>
                        </div>
                <div className="add_content">
                <div className = "add_comment"> How about this kind of perfume?</div>
                <br/>
                <div>

                {/*<div className = "add1">
                <Link to="/add">
                    <img
                    src = {add_image1}
                    width = "100"
                    height = "100"
                    >
                    </img>
                </Link>
                </div>*/}
                
                <div className = "add1" onClick = {()=>{
                    add(1)
                }}>
                <img
                    src = {add_image1}
                    width = "100"
                    height = "100"
                    >
                    </img>
                </div>

                <div className = "add2" onClick = {()=>{
                    add(2)
                }}>
                <img
                    src = {add_image2}
                    width = "100"
                    height = "100"
                    >
                    </img>
                </div>
                
                {/*<div className = "add2">
                <Link to="/add">
                <img
                    src = {add_image2}
                    width = "100"
                    height = "100"
                    >
                    </img>
                    </Link>
                </div>*/}

                </div>
                </div>
                <br/><br/>
                <iframe className="iframe1" width="800" height="500" frameBorder="1" scrolling="no" src="https://perfummme.com/add">로딩 불가 메세지</iframe>
                <iframe className="iframe2" width="800" height="500" frameBorder="1" scrolling="no" src="https://perfummme.com/add2">로딩 불가 메세지</iframe>
                <div className = "tohome_btn">
                <Link to="/">
                
                <button type="button" className = "start_btn custom-btn btn-8" onClick={()=>{
                    console.log("click")
                }}>
                    {/* <img className="img_btn" src="https://img.freepik.com/free-vector/play-button-on-white-background_97458-84.jpg?w=1380"/> */}
            
                <span>home</span>
                </button>
                
                </Link>
                </div>
            </div>
            

            
            {/* <Imf users={users}/> */}
            {/* {perfumes&&perfumes.map(perfumes=>(
                <div className = "per" key = {perfumes.name}>
                    {perfumes.name} <br/>
                    ({perfumes.brand})<br/>
                    향기 : {perfumes.scent}
                    
                </div> 
                
                
            ))} */}

            </div>
            
        </div>
    )
}
export default Test;