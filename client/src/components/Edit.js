import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Edit(){
    const navigate = useNavigate("")
    const [title, setTitle] = useState("");
    const [stops, setStops] = useState([""]);
    const [times, setTimes] = useState([""]);
    const [image, setImage] = useState("");
    const [duration, setDuration] = useState("");
    const[daytrip, setDaytrip] = useState({});
    const {id} = useParams();
    let decoded
    let token

    token = localStorage.getItem("token")
    if (token){
        decoded = jwtDecode(token)
    }
    
    useEffect(()=>{
        async function getDaytrip(){
            let res = await axios.get(`http://localhost:8000/daytrip/${id}`)
            console.log(res)
            if (res.status===200){
                setDaytrip(res.data);
                setTitle(res.data.title)
                setStops(res.data.stops)
                setTimes(res.data.times)
                setImage(res.data.image)
            }else{
                console.log("waiting")
            }
        }
        getDaytrip();
    }, [])

    //updating a daytrip:
    // async function updateDaytrip(id){
    //     let updatedValue = {};
    //     let res = await axios.put(`http://localhost:8000/daytrip/${id}`, updatedValue);
    // }

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
    
    const updateDaytrip = async (event) =>{
        event.preventDefault();
        try{
           
            let data = {title, stops, image, times, duration};
            let res = await axios.put(`http://localhost:8000/daytrip/${id}`, 
                data, 
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
            <form className="updateDaytrip-form" onSubmit={updateDaytrip}>
                <input
                    placeholder="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
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
                            value={stops[index]}
                        />
                        <input //input field for the corresponding times
                            placeholder={"estimated Time for this stop"}
                            type="text"
                            onChange = {(e) => {
                                handleTimeChange(e,index)
                            }}
                            value={times[index]}
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
                    value={image}
                />
                <input type="submit" value="Update Daytrip" />
            </form>
        </div>
    )
}

export default Edit;