import React, {useState} from "react";
import axios from "axios";
import Login from "../components/Login"
import Register from "../components/Register";
import { Link, useNavigate } from "react-router-dom";

import {jwtDecode} from "jwt-decode";
import { Container, Typography, Box, Button, Paper, Item } from "@mui/material";

function LandingPage(){
    let token;
    let decoded;
    const navigate = useNavigate("")
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token")
        decoded = jwtDecode(token);
        console.log(decoded);
    }

    return(
        <Container 
            maxWidth="xl" 
        >
            {token ? (
                <Box 
                    maxWidth="lg" 
                    sx={{  
                        border:0, 
                        flexGrow:5, 
                        p:3
                    }}
                >
                    <Typography 
                        variant="h3" 
                        sx={{py:4, mb:20}}
                        >Welcome Back to TRVLR
                    </Typography>

                    <Typography variant="h5" sx={{mb:5}}>
                        Hello {decoded.username}!
                    </Typography>
                    <Typography variant="h5" sx={{mb:20}}>
                        What's your next move?
                    </Typography>

                    <Box 
                        sx={{
                            display: "flex",
                            my: 10,
                            mb:33.5
                    }}>
                        <Button 
                            variant="outlined" 
                            type="Button"
                            size="large"
                            sx={{
                                m:1,
                                my:3,
                                color:"Black",
                                borderColor:"Black",
                                ":hover" : {borderColor: "Black"},
                            }}
                        >
                            <Link  
                                style={{ textDecoration: 'none' }} 
                                to="/daytrips"
                            >
                                <Typography 
                                    variant="h5" 
                                    sx={{letterSpacing: '.2rem', color:"black"}}
                                >
                                    Browse through Daytrips
                                </Typography>
                            </Link>
                        </Button>

                        <Button 
                            variant="outlined" 
                            type="Button"
                            size="large"
                            sx={{
                                m:1,
                                my:3,
                                color:"Black",
                                borderColor:"Black",
                                ":hover" : {borderColor: "Black"},
                            }}
                        >
                            <Link  
                                style={{ textDecoration: 'none' }} 
                                to="/newdaytrip"
                            >
                                <Typography 
                                    variant="h5" 
                                    sx={{letterSpacing: '.2rem', color:"black"}}
                                >
                                    Create a New Daytrip
                                </Typography>
                            </Link>
                        </Button>

                        <Button 
                            variant="outlined" 
                            type="Button"
                            size="large"
                            sx={{
                                m:1,
                                my:3,
                                color:"Black",
                                borderColor:"Black",
                                ":hover" : {borderColor: "Black"},
                            }}
                        >
                            <Link  
                                style={{ textDecoration: 'none' }} 
                                to="/Owner"
                            >
                                <Typography 
                                    variant="h5" 
                                    sx={{letterSpacing: '.2rem', color:"black"}}
                                >
                                    Checkout your daytrips
                                </Typography>
                            </Link>
                        </Button>
                    </Box>
                </Box>
            ):(
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width:1
                    }}
                >
                    <Box 
                        maxWidth="xl" 
                        sx={{  
                            border:0, 
                            flexGrow:5, 
                            p:3
                        }}
                    >
                        <Typography 
                            variant="h3" 
                            sx={{py:4}}
                            >Welcome to TRVLR</Typography>
                        <Typography 
                            variant="h5" 
                            fontWeight={"bold"}
                            sx={{py:3}}
                            >Discover Unique Day Trips in the World's Greatest Cities</Typography>
                        <Typography variant="h5">
                            Are you a solo traveler or exploring with a partner? 
                            TRVLR is your go-to platform for uncovering the best day trips in all the mayor Cities. 
                            Our unique approach allows locals and knowledgeable 
                            travelers to design day trips that others can enjoy and complete. Whether you're 
                            interested in history, culture, nature, or something off the beaten path, TRVLR has 
                            something for everyone.
                        </Typography>

                        <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Typography 
                            variant="h4" 
                            sx={{py:5, mt:5}}>What Makes TRVLR Special?</Typography>
                        </Box>
                        <Box sx={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                            <Paper elevation="3" sx={{m:1, p:2, maxWidth:"sm"}}>
                                <Box sx={{display: "flex", justifyContent:"center", py:2}}>
                                    <Typography variant="h5" fontWeight={"bold"}>User-Created Day Trips</Typography>
                                </Box>
                                <Typography variant="h5"sx={{py:1}}>
                                    Our trips are designed by users who know their cities inside out. Get authentic 
                                    experiences crafted by people who share your passion for exploration.
                                </Typography>
                            </Paper>
                            <Paper elevation="3" sx={{m:1, p:2, maxWidth:"sm"}}>
                                <Box sx={{display: "flex", justifyContent:"center", py:2}}>
                                    <Typography variant="h5" fontWeight={"bold"}>Community Driven</Typography>
                                </Box>
                                <Typography variant="h5"sx={{py:1}}>
                                    Connect with a community of like-minded travelers. Browse, save, and share day 
                                    trips directly from your dashboard.
                                </Typography>
                            </Paper>
                            <Paper elevation="3" sx={{m:1, p:2, maxWidth:"sm"}}>
                                <Box sx={{display: "flex", justifyContent:"center", py:2}}>
                                    <Typography variant="h5" fontWeight={"bold"}>Completely Free</Typography>
                                </Box>
                                <Typography variant="h5"sx={{py:1}}>
                                    All our resources are free to use. Get inspired by day trips without any booking fees or hidden costs.
                                </Typography>
                            </Paper>
                            <Paper elevation="3" sx={{m:1, p:2, maxWidth:"sm"}}>
                                <Box sx={{display: "flex", justifyContent:"center", py:2}}>
                                    <Typography variant="h5" fontWeight={"bold"}>Ratings & Reviews</Typography>
                                </Box>
                                <Typography variant="h5"sx={{py:1}}>
                                    Soon, you'll be able to read reviews and ratings from fellow travelers, 
                                    helping you choose the best experiences.
                                </Typography>
                            </Paper>
                        </Box>
                        <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Typography variant="h4" sx={{py:3, mt:5}}>How It Works</Typography>
                        </Box>
                        
                        <Box sx={{display: "flex", flexDirection:"row"}}>
                            <Paper elevation="3" sx={{m:1, p:2}}>
                                <Box sx={{display: "flex", justifyContent:"center", py:2}}>
                                    <Typography variant="h5" fontWeight={"bold"}>Explore</Typography>
                                </Box>
                                <Typography variant="h5" sx={{py:1}}>
                                    Browse through a wide range of user-created day trips tailored for solo travelers and couples.
                                </Typography>
                            </Paper>
                            <Paper elevation="3" sx={{m:1, p:2, px:5}}>
                                <Box sx={{display: "flex", justifyContent:"center", py:2}}>
                                    <Typography variant="h5" fontWeight={"bold"}>Save</Typography>
                                </Box>
                                <Typography variant="h5" sx={{py:1}}>
                                    Found something you like? Save day trips to your personal dashboard for easy access.
                                </Typography>
                            </Paper>
                            <Paper elevation="3" sx={{m:1, p:2, px:5}}>
                                <Box sx={{display: "flex", justifyContent:"center", py:2}}>
                                    <Typography variant="h5" fontWeight={"bold"}>Share</Typography>
                                </Box>
                                <Typography variant="h5" sx={{py:1}}>
                                    Once you've enjoyed a trip, share your experience and help others by leaving ratings and comments.
                                </Typography>
                            </Paper>
                        </Box>
                        <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Typography variant="h4" sx={{py:3, mt:5}}>Join the TRVLR Community Today</Typography>
                        </Box>
                        <Typography variant="h5">
                            Dive into the best experiences the world's biggest cities have to offer. 
                            Whether you're planning your next adventure or looking to share your own, TRVLR is here to inspire 
                            and connect.
                        </Typography>
                    </Box>
                    <Box 
                        sx={{
                            border: 0,
                            flexGrow:2,
                            p:3,
                            px:12,
                            bgcolor: "black",
                            display: "flex",
                        }}
                    >
                        <Register/>
                    </Box>
                </Box>
            )}

        </Container>
    )
}

export default LandingPage;