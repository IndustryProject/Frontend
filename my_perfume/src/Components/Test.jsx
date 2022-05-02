import React, {useEffect, useState} from 'react';
import "./test.css";
import {Link} from "react-router-dom";
import axios from 'axios';
import Imf from './Imf';


const Test = () => {
    const[perfumes, setPerfumes] = useState("");
    const [basenote1, setbasenote1] = useState("");
    const [brand1, setbrand1] = useState("");
    const [middlenote1, setmiddlenote1] = useState("");
    const [name1, setname1] = useState("");
    const [scent1, setscent1] = useState("");
    const [concentration1, setconcentration1] = useState("");
    const [imageUrl1, seturl1] = useState("");
    const [basenote2, setbasenote2] = useState("");
    const [brand2, setbrand2] = useState("");
    const [middlenote2, setmiddlenote2] = useState("");
    const [name2, setname2] = useState("");
    const [scent2, setscent2] = useState("");
    const [concentration2, setconcentration2] = useState("");
    const [imageUrl2, seturl2] = useState("");
    const [basenote3, setbasenote3] = useState("");
    const [brand3, setbrand3] = useState("");
    const [middlenote3, setmiddlenote3] = useState("");
    const [name3, setname3] = useState("");
    const [scent3, setscent3] = useState("");
    const [concentration3, setconcentration3] = useState("");
    const [imageUrl3, seturl3] = useState("");
    const [add_image1,setaddimage1] = useState("");
    const [add_image2,setaddimage2] = useState("");
    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response =>{
        // {/*'https://jsonplaceholder.typicode.com/users'*/}
        //     setUsers(response.data);
        // });
        axios.get('/filtering?standard=2').then(response=>{
            console.log(response.data)
            setaddimage1(response.data[0].imgUrl);
            setaddimage2(response.data[1].imgUrl);
        })
        axios.get('/filtering?standard=1',
        {
          headers:
          { 
            //"x-access-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NDA1OTk4MDcsImV4cCI6MTY3MjEzNTgwNywic3ViIjoidXNlckluZm8ifQ.FFgxskXgUuT2ARN0wKMF2K_YhxyhrLJ_8jfz7YE207Q'
            
          }
        })
        .then(response =>{
            console.log(response.data);
            setname1(response.data[0].name);
            setbasenote1(response.data[0].base_note);
            setbrand1(response.data[0].brand);
            setmiddlenote1(response.data[0].middle_note);
            setconcentration1(response.data[0].concentration);
            seturl1(response.data[0].imgUrl);
            setname2(response.data[1].name);
            setbasenote2(response.data[1].base_note);
            setbrand2(response.data[1].brand);
            setmiddlenote2(response.data[1].middle_note);
            setconcentration2(response.data[1].concentration);
            seturl2(response.data[1].imgUrl);
            setname3(response.data[2].name);
            setbasenote3(response.data[2].base_note);
            setbrand3(response.data[2].brand);
            setmiddlenote3(response.data[2].middle_note);
            setconcentration3(response.data[2].concentration);
            seturl3(response.data[2].imgUrl);

        });
    },[]);
    return(
        <div className = "test_outer">
            <div className = "test_inner">
                <div className = "result">Perfume for you</div>
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
                        브랜드 : {brand1}<br/><br/>
                        밤낮 : {concentration1}<br/><br/>
                        베이스 노트 : {basenote1}<br/><br/>
                        미들 노트 : {middlenote1}<br/>
                    </div>
                    

                    
                  
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
                        브랜드 : {brand2}<br/><br/>
                        밤낮 : {concentration2}<br/><br/>
                        베이스 노트 : {basenote2}<br/><br/>
                        미들 노트 : {middlenote2}<br/>

                    </div>

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
                        브랜드 : {brand3}<br/><br/>
                        밤낮 : {concentration3}<br/><br/>
                        베이스 노트 : {basenote3}<br/><br/>
                        미들 노트 : {middlenote3}<br/>
                    </div>

                </div>
                
                <div className="add_content">
                <div className = "add_comment"> How about this kind of perfume?</div>
                <br/>
                <div>
                <div className = "add1">
                <Link to="/add">
                    <img
                    src = {add_image1}
                    width = "100"
                    height = "100"
                    >
                    </img>
                </Link>
                </div>
                <div className = "add2">
                <Link to="/add">
                <img
                    src = {add_image2}
                    width = "100"
                    height = "100"
                    >
                    </img>
                    </Link>
                </div>
                </div>
                </div>
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