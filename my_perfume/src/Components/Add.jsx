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
    const [basenote2, setbasenote2] = useState("");
    const [brand2, setbrand2] = useState("");
    const [middlenote2, setmiddlenote2] = useState("");
    const [name2, setname2] = useState("");
    const [scent2, setscent2] = useState("");
    const [concentration2, setconcentration2] = useState("");
    const [imageUrl2, seturl2] = useState("");
    useEffect(()=>{
    axios.get('/filtering?standard=3').then(response=>{
    console.log(response.data)
    setbasenote1(response.data[0].base_note)

    })
    },[]);
    return (
        <div className= "add_outer">
          <div className = "add_inner">
            
            <div className = "add">add</div>
      
            {basenote1}
       
        
    
          </div>
        </div>
        

        
        
        
    );
    
}


export default Add;