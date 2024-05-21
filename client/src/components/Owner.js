import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Owner(){
    const[daytrips, setDaytrips] = useState([]);
    let token;
    let decoded
    token = localStorage.getItem("token")
    if(token){
        decoded = jwtDecode(token)
        console.log(decoded)
    }

    const getAllDaytrips = async() => {
        let res = await axios.get("http://localhost:8000/daytrip");
        console.log(res.data)
        setDaytrips(res.data);
    };
    useEffect(() => {
        getAllDaytrips();
    }, []);

    //deleting a daytrip:
    async function deleteDaytrip(id){
        let res = await axios.delete(`http://localhost:8000/daytrip/${id}`)
        alert(res.data.msg);
        getAllDaytrips();
    }

    const saveDaytrip = async()=>{

    }

    //updating a daytrip:
    async function updateDaytrip(id){
        let updatedValue = {};
        let res = await axios.put(`http://localhost:8000/daytrip/${id}`, updatedValue);
    }
    return(
        <div>
            {daytrips.map((daytrip)=>{
                if(daytrip.author._id === decoded.id){
                    return(
                        <div>
                            <h2>{daytrip.title}</h2>
                            <img src={daytrip.image} alt=""/>
                            <h3>{"Stops: " + daytrip.stops.length}</h3>
                            <h3>{"Estimated Time: " + daytrip.duration}</h3>
                            {token ? (<>
                                <button>Save</button>
                                <div key={daytrip._id}>
                                    <Link to={`/inspect/${daytrip._id}`}>
                                        <button>Inspect</button>
                                    </Link>
                                </div>
                                {decoded.id === daytrip.author._id ? (<>
                                <button onClick={() => deleteDaytrip(daytrip._id)}>delete</button>
                                <div key={daytrip._id}>
                                    <Link to={`/edit/${daytrip._id}`}>
                                        <button>edit</button>
                                    </Link>
                                </div>
                                
                                </> ):null}
                            </> ):null}
                        </div>
                )
                }else{
                    return null;
                }
            })}
        </div>
    )
}

export default Owner;