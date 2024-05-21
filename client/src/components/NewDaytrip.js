import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {jwtDecode} from "jwt-decode";

function NewDaytrip(){
    const navigate = useNavigate("")
    const [title, setTitle] = useState("");
    const [stops, setStops] = useState([""]);
    const [times, setTimes] = useState([""]);
    const [image, setImage] = useState("");
    const [duration, setDuration] = useState("");
    let token = localStorage.getItem("token")

    useEffect(()=>{
        let sum = 0;
        //console.log("initial sum " + sum)
        console.log("initial times" + times)
        for (let i = 0; i<times.length; i++){
            sum += Number(times[i]);
            console.log("times" + times[i])
            console.log("sum: " + sum)
        }
        //let sum = times.reduce((acc,value)=>acc + Number(value), 0)
        console.log("right before declaring duration:" + sum)
        setDuration(sum.toString());
        console.log("duration " + duration)
    },[times])


    const createDaytrip = async (event) =>{
        event.preventDefault();
        try{
           
            let daytrip = {title, stops, image, times, duration};
            let res = await axios.post("http://localhost:8000/daytrip/create", 
                daytrip, 
                {headers:{Authorization:`Bearer ${token}`}});
            console.log(res.data.msg);
            navigate("/daytrips");
        }catch(error){
            console.log(error)
        }
    }

    const addStop = async () =>{
        try {
            setStops([...stops, ""])
            setTimes([...times, ""])
        } catch (error) {
            console.log(error)
        }
    }

    const handleStopChange = async (e, index)=>{
        try {
            const {value} = e.target;
            const stopsArray = [...stops];
            stopsArray[index] = value;
            setStops(stopsArray);
            //console.log(stops)
        } catch (error) {
            console.log(error)
        }
    }

    const handleTimeChange = async (e, index)=>{
        try {
            const {value} = e.target;
            const timesArray = [...times];
            timesArray[index] = value;
            setTimes(timesArray);
            //console.log("times from handleTimeChange" + times);
        } catch (error) {
            console.log(error)
        }
    }

    const removeStop = async (index)=>{
        try {
            const stopslist = [...stops]
            const timeslist = [...times]
            stopslist.splice(index, 1);
            timeslist.splice(index, 1);
            setStops(stopslist);
            setTimes(timeslist);
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="firm-container">
            <h1>NewDaytrip</h1>
            <form className="createDaytrip-form" onSubmit={createDaytrip}>
                <input
                    placeholder="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                />
                {stops.map((stop, index)=>{
                    //Loop through the stops and render 2 inputs for each(place and time)
                    return(
                    <div key={index}>
                        <input //input field for new stops
                            placeholder={index +1 +". Stop"}
                            type="text"
                            onChange = {(e) => {
                                handleStopChange(e, index);
                            }}
                        />
                        <input //input field for the corresponding times
                            placeholder={"estimated Time for this stop"}
                            type="text"
                            onChange = {(e) => {
                                handleTimeChange(e,index)
                            }}
                        />
                        <button type="button" onClick={() => removeStop(index)}>  
                        Remove Stop 
                        </button>
                    </div>)
                })}
                <button type="button" onClick={() => addStop()}>addStop</button>
                <input
                    placeholder="imgURL"
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                />
                <input type="submit" value="Create a new Daytrip" />
            </form>
        </div>
    )
}

export default NewDaytrip;