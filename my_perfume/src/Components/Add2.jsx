import React, {useEffect, useState} from 'react';
import "./add.css";
import axios from 'axios';

const Add2 = () =>{
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
  const [rating2, setrating2] = useState("");

  useEffect(()=>{
  axios.get('/filtering?standard=3').then(response=>{
    console.log(response.data)
    setname2(response.data[1].name);
    setbasenote2(response.data[1].base_note);
    setbrand2(response.data[1].brand);
    setmiddlenote2(response.data[1].middle_note);
    setconcentration2(response.data[1].concentration);
    seturl2(response.data[1].imgUrl);
    setrating2(response.data[1].rating);

  })
  },[]);
  return (
    
    <div className = "add_result">
      <div className = "add_no2">
        <div className = "add_img2">
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
          미들 노트 : {middlenote2}<br/><br/>
          평점 : {rating2}<br/>
        </div>
      </div>
      
    </div>
      
  );
  
}


export default Add2;