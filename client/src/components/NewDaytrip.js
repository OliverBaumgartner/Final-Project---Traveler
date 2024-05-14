import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {jwtDecode} from "jwt-decode";

function NewDaytrip(){
    const navigate = useNavigate("")
    const [title, setTitle] = useState("");
    const [stops, setStops] = useState("");
    const [image, setImage] = useState("");
    let token = localStorage.getItem("token")


    const createDaytrip = async (event) =>{
        event.preventDefault();
        try{
            let daytrip = {title, stops, image};
            let res = await axios.post("http://localhost:8000/daytrip/create", 
                daytrip, 
                {headers:{Authorization:`Bearer ${token}`}});
            console.log(res.data.msg);
            navigate("/daytrips");
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div className="firm-container">
            <h1>NewDaytrip</h1>
            <form className="createDaytrip-form" onSubmit={createDaytrip}>
            <input
                    placeholder="Title"
                    type="title"
                    name="title"
                    id=""
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    placeholder="Stops"
                    type="stops"
                    name="stops"
                    id=""
                    onChange={(e) => setStops(e.target.value)}
                />
                <input
                    placeholder="Image"
                    type="text"
                    name="image"
                    id=""
                    onChange={(e) => setImage(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewDaytrip;