import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Box } from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Daytrips(){
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
        <Container>
            <Typography
                variant="h3" 
                sx={{py:4}}
            >
                Discover Daytrips:
            </Typography>
            <Box sx={{display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}> 
            {daytrips.map((daytrip)=>{
                return(
                    <Card sx={{ maxWidth: 345, m:4
                     }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={daytrip.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {daytrip.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {"Stops: " + daytrip.stops.length}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {"Estimated Time: " + daytrip.duration + " minutes"}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display:"flex", justifyContentContent:"center"}}>
                            {token ? (<>
                                <Button size="small" sx={{bgcolor:"#e8e8e8"}}>
                                    <Link style={{ textDecoration: 'none' }} to={`/inspect/${daytrip._id}`}>
                                        <Typography variant="h7" sx={{color: "black"}}>
                                            Inspect
                                        </Typography>
                                    </Link>
                                </Button>
                                <Button size="small" sx={{bgcolor:"#e8e8e8"}}>
                                <Link style={{ textDecoration: 'none' }} to={`/edit/${daytrip._id}`}>
                                    <Typography variant="h7" sx={{color: "black"}}>
                                        Edit
                                    </Typography>
                                </Link>
                            </Button>
                            </>):null}
                        </CardActions>
                    </Card>
                )
            })}
            </Box>
        </Container>
    )
}

export default Daytrips;