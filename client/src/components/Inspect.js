import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Box, Grid } from "@mui/material";

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
        <Container>
            <Card sx={{ maxWidth: "xl", m:4
            }}>
                <CardMedia
                    sx={{ height: 400 }}
                    image={daytrip.image}
                />
                <CardContent 
                    sx={{ maxWidth:"xl", width: 1
                    }}         
                >
                    <Typography gutterBottom variant="h5" component="div" sx={{display: "flex", justifyContent: "center"}}>
                        {daytrip.title}
                    </Typography>
                    <Box sx={{display:"flex", justifyContent: "space-between"}}>
                        <Box sx={{m:3, maxWidth:700}}>
                            {daytrip.stops && daytrip.stops.map((stop)=>{
                            return(
                                <Typography variant="body1" color="text.secondary" sx={{my:1,}}>
                                    {stop}
                                </Typography>
                            )
                            })}
                            <Typography variant="body1" color="text.secondary" sx={{my:2, fontWeight:"bold"}}>
                                {"Estimated Time:"}
                            </Typography>
                        </Box>
                        <Box sx={{m:3, mx:6}}>
                            {daytrip.times && daytrip.times.map((time)=>{
                            return(
                                <Typography variant="body1" color="text.secondary" sx={{my:1}}>
                                    {time + " minutes"}
                                </Typography>
                            )
                            })}
                            <Typography variant="body1" color="text.secondary" sx={{my:2, fontWeight:"bold"}}>
                                {(Math.round(daytrip.duration/60*100)/100) + " hours"}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContentContent:"center"}}>
                    {decoded.id === daytrip.author ? (<>
                        <Button size="small" sx={{bgcolor:"#e8e8e8"}} onClick={()=> updateDaytrip(daytrip._id)}>
                            <Link style={{ textDecoration: 'none' }} to={`/Edit/${daytrip._id}`}>
                                <Typography variant="h7" sx={{color: "black"}}>
                                    Edit
                                </Typography>
                            </Link>
                        </Button>
                        <Button size="small" sx={{bgcolor:"#e8e8e8"}} onClick={()=> deleteDaytrip(daytrip._id)} >
                            <Typography variant="h7" sx={{color: "black"}}>
                                Delete
                            </Typography>
                        </Button>
                    </>):null}
                </CardActions>
            </Card>
        </Container>
    )
}

export default Inspect;