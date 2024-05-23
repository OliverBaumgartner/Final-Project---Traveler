import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Box, Grid, TextField } from "@mui/material";

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
        <Container className="firm-container">
            <Typography
                variant="h3" 
                sx={{py:4}}
            >
                Create a new Daytrip:
            </Typography>
            <Card sx={{ maxWidth: "xl", m:3}}>
                <form className="createDaytrip-form" onSubmit={createDaytrip}>
                <CardMedia
                    sx={{ height: 400 }}
                    image={image}
                />
                <Box sx={{display:"flex", justifyContent: "center", p:3}}>
                    <TextField label="Image URL" onChange={(e) => setImage(e.target.value)}/>
                </Box>
                <CardContent 
                    sx={{ maxWidth:"xl", width: 1
                    }}         
                >   
                     <Box sx={{display:"flex", justifyContent: "center", p:3}}>
                    <TextField fullWidth label="Title" sx={{pr:3}}onChange={(e) => setTitle(e.target.value)}/>
                    </Box>
                    <Box sx={{display:"flex", justifyContent: "space-around"}}>
                        <Box sx={{m:3, display: "flex", flexDirection: "column"}}>
                            {stops.map((stop, index)=>{
                            return(
                                <TextField fullWidth sx={{m:1, pr:40, size:"medium"}} label={index +1 +". Stop"} onChange={(e) => handleStopChange(e, index)}/>
                            )
                            })}
                        </Box>
                        <Box sx={{m:3, maxWidth:700}}>
                            {times.map((time, index)=>{
                            return(
                            <Box sx={{display: "flex", flexDirection: "row"}}>
                                <TextField  fullWidth sx={{m:1,}}label="estimated Time for this stop" onChange={(e) => handleTimeChange(e, index)}/>
                                <Button size="small" sx={ {m:1, mx: 2, bgcolor:"#e8e8e8"}} onClick={()=> removeStop(index)}>
                                    <Typography variant="h7" sx={{color: "black"}}>
                                        Remove Stop
                                    </Typography>
                                </Button>
                            </Box>
                            )
                            })}
                        </Box>
                        
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button size="small" sx={{bgcolor:"#e8e8e8"}} onClick={()=> addStop()}>
                            <Typography variant="h7" sx={{color: "black"}}>
                                Add Stop
                            </Typography>
                    </Button>
                    </Box>
                </CardContent>
                <CardActions sx={{display:"flex", flexDirection: "row-reverse"}}>
                    <Button size="small" sx={{bgcolor:"#e8e8e8"}} type="Submit">
                            <Typography variant="h7" sx={{color: "black"}}>
                                Create Daytrip
                            </Typography>
                        </Button>
                </CardActions>
                </form>
            </Card>
        </Container>
    )
}

export default NewDaytrip;