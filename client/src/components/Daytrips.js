import axios from "axios";
import React, {useEffect, useState} from "react";

function Daytrips(){
    const[daytrips, setDaytrips] = useState([]);

    const getAllDaytrips = async() => {
        let res = await axios.get("http://localhost:8000/daytrip");
        console.log(res.data)
        setDaytrips(res.data);
    };
    useEffect(() => {
        getAllDaytrips();
    }, []);
    return(
        <div>
            {daytrips.map((daytrip)=>{
                return(
                    <div>
                        <h2>{daytrip.title}</h2>
                        <img src={daytrip.image}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Daytrips;