import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Inspect(){
    const[daytrip, setDaytrip] = useState({});
    const {id} = useParams();
    //console.log(id);
    let decoded
    let token
    const navigate = useNavigate("")
    token = localStorage.getItem("token")
    if (token){
        decoded = jwtDecode(token)
    }
    
    useEffect(()=>{
        async function inspectDaytrip(){
            let res = await axios.get(`http://localhost:8000/daytrip/${id}`)
            console.log(res)
            if (res.status===200){
                setDaytrip(res.data);
            }else{
                console.log("waiting")
            }
        }
        inspectDaytrip();
    }, [])

    //deleting a daytrip:
    async function deleteDaytrip(id){
        let res = await axios.delete(`http://localhost:8000/daytrip/${id}`)
        alert(res.data.msg);
        navigate("/daytrips")
    }

    //updating a daytrip:
    async function updateDaytrip(id){
        let updatedValue = {};
        let res = await axios.put(`http://localhost:8000/daytrip/${id}`, updatedValue);
    }

    console.log(daytrip.stops)
    return(
        <div>
            <img src={daytrip.image} alt=""/>
            <h1>{daytrip.title}</h1>
            <h2>{daytrip.duration}</h2>
            {daytrip.stops && daytrip.stops.map((stop)=>{
                return(
                    <div>
                        <h2>{stop}</h2>
                    </div>
                )
            })}
            {daytrip.times && daytrip.times.map((time)=>{
                return(
                    <div>
                        <h2>{time}</h2>
                    </div>
                )
            })}


            {decoded.id === daytrip.author ? (<>
                            <button onClick={() => deleteDaytrip(daytrip._id)}>delete</button>
                            <button onClick={()=> updateDaytrip(daytrip._id)}>edit</button>
                            </> ):null}
        </div>
    )
}

export default Inspect;