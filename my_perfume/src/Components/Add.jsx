import React, {useEffect, useState} from 'react';
import "./add.css";
import axios from 'axios';

const Add = () =>{
    const [basenote1, setbasenote1] = useState("");
    const [brand1, setbrand1] = useState("");
    const [middlenote1, setmiddlenote1] = useState("");
    const [name1, setname1] = useState("");
    const [scent1, setscent1] = useState("");
    const [concentration1, setconcentration1] = useState("");
    const [imageUrl1, seturl1] = useState("");
    const [rating1, setrating1] = useState("");
    useEffect(()=>{
    axios.get('/filtering?standard=3').then(response=>{
      console.log(response.data)
      setname1(response.data[0].name);
      setbasenote1(response.data[0].base_note);
      setbrand1(response.data[0].brand);
      setmiddlenote1(response.data[0].middle_note);
      setconcentration1(response.data[0].concentration);
      seturl1(response.data[0].imgUrl);
      setrating1(response.data[0].rating);
    })
    },[]);
    return (
      
      <div className = "add_result">
        <div className = "add_no1">
          <div className = "add_img1">
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
            미들 노트 : {middlenote1}<br/><br/>
            평점 : {rating1}<br/>
          </div>
        </div>
        
      </div>
        
    );
    
}


export default Add;