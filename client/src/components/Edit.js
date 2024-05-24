import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Box, Grid, TextField } from "@mui/material";

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

    useEffect(()=>{
        let sum = 0;
        for (let i = 0; i<times.length; i++){
            sum += Number(times[i]);
        }
        setDuration(sum.toString());
    },[times])
    
    const updateDaytrip = async (event) =>{
        event.preventDefault();
        try{
           
            let data = {title, stops, image, times, duration};
            let res = await axios.put(`http://localhost:8000/daytrip/${id}`, 
                data, 
                {headers:{Authorization:`Bearer ${token}`}});
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
                Update your Daytrip:
            </Typography>
            <Card sx={{ maxWidth: "xl", m:3}}>
                <form className="updateDaytrip-form" onSubmit={updateDaytrip}>
                <CardMedia
                    sx={{ height: 400 }}
                    image={image}
                />
                <Box sx={{display:"flex", justifyContent: "center", p:3}}>
                    <TextField onChange={(e) => setImage(e.target.value)} value={image}/>
                </Box>
                <CardContent 
                    sx={{ maxWidth:"xl", width: 1
                    }}         
                >   
                     <Box sx={{display:"flex", justifyContent: "center", p:3}}>
                    <TextField 
                        fullWidth 
                        sx={{pr:3}}onChange={(e) => setTitle(e.target.value)} 
                        value={title}/>
                    </Box>
                    <Box sx={{display:"flex", justifyContent: "space-around"}}>
                        <Box sx={{m:3, display: "flex", flexDirection: "column"}}>
                            {stops.map((stop, index)=>{
                            return(
                                <TextField 
                                    fullWidth 
                                    sx={{m:1, pr:40, size:"medium"}} 
                                    
                                    onChange={(e) => handleStopChange(e, index)}
                                    value={stops[index]}
                                />
                            )
                            })}
                        </Box>
                        <Box sx={{m:3, maxWidth:700}}>
                            {times.map((time, index)=>{
                            return(
                            <Box sx={{display: "flex", flexDirection: "row"}}>
                                <TextField  
                                    fullWidth 
                                    sx={{m:1,}}
                                    placeholder="estimated Time for this stop" 
                                    onChange={(e) => handleTimeChange(e, index)}
                                    value={times[index]}
                                />
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
                                Update Daytrip
                            </Typography>
                        </Button>
                </CardActions>
                </form>
            </Card>
        </Container>
    )
}

export default Edit;