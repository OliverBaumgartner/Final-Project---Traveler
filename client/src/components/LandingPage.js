import React, {useState} from "react";
import axios from "axios";
import Login from "../components/Login"
import Register from "../components/Register";
import { Link, useNavigate } from "react-router-dom";

import {jwtDecode} from "jwt-decode";
import { Container, Typography, Box, Button } from "@mui/material";

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
                        sx={{py:4}}
                        >Welcome Back to TRVLR
                    </Typography>
                    <Typography 
                        variant="h5" 
                        fontWeight={"bold"}
                        sx={{py:3}}
                        >Your Gateway to Unique City Day Trips
                    </Typography>
                    <Typography variant="h5">
                        Hello {decoded.username}!
                    </Typography>
                    <Typography variant="h5">
                        We're thrilled to have you back. Dive into new adventures and explore user-created 
                        day trips in the world's greatest cities. As a valued member of the TRVLR community, 
                        you have access to personalized recommendations and can easily manage your saved trips.
                    </Typography>

                    <Typography 
                        variant="h5" 
                        fontWeight={"bold"}
                        sx={{py:3}}
                    >
                        Explore New Day Trips
                    </Typography>
                    <Typography variant="h5">
                        Discover fresh experiences designed by fellow travelers and city experts. Whether you're 
                        revisiting your favorite city or exploring a new one, our diverse collection of day trips 
                        ensures there's always something exciting to do.
                    </Typography>

                    <Typography 
                        variant="h5" 
                        fontWeight={"bold"}
                        sx={{py:3}}
                    >
                        Connect with Fellow Travelers
                    </Typography>
                    <Typography variant="h5">
                        Join the conversation with other TRVLR members. Share tips, ask questions, and find inspiration 
                        from those who share your passion for travel.
                    </Typography>
                    <Box 
                        sx={{
                            display: "flex",
                            my: 10
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


                        <Typography 
                            variant="h4" 
                            sx={{py:3}}>What Makes TRVLR Special?</Typography>
                        <Typography variant="h5"sx={{py:1}}>
                            <Typography variant="h5" fontWeight={"bold"}> - User-Created Day Trips:</Typography>
                            Our trips are designed by users who know their cities inside out. Get authentic 
                            experiences crafted by people who share your passion for exploration.
                        </Typography>
                        <Typography variant="h5"sx={{py:1}}>
                            <Typography variant="h5" fontWeight={"bold"}> - Community Driven:</Typography>
                            Connect with a community of like-minded travelers. Browse, save, and share day 
                            trips directly from your dashboard.
                        </Typography>
                        <Typography variant="h5"sx={{py:1}}>
                            <Typography variant="h5" fontWeight={"bold"}> - Completely Free:</Typography>
                            All our resources are free to use. Get inspired by day trips without any booking fees or hidden costs.
                        </Typography>
                        <Typography variant="h5"sx={{py:1}}>
                            <Typography variant="h5" fontWeight={"bold"}> - Ratings & Reviews:</Typography>
                            Soon, you'll be able to read reviews and ratings from fellow travelers, 
                            helping you choose the best experiences.
                        </Typography>


                        <Typography variant="h4" sx={{py:3}}>How It Works</Typography>
                        <Typography variant="h5" sx={{py:1}}>
                            <Typography variant="h5" fontWeight={"bold"}> - Explore:</Typography>
                            Browse through a wide range of user-created day trips tailored for solo travelers and couples.
                        </Typography>
                        <Typography variant="h5" sx={{py:1}}>
                            <Typography variant="h5" fontWeight={"bold"}> - Save:</Typography>
                            Found something you like? Save day trips to your personal dashboard for easy access.
                        </Typography>
                        <Typography variant="h5" sx={{py:1}}>
                            <Typography variant="h5" fontWeight={"bold"}> - Share:</Typography>
                            Once you've enjoyed a trip, share your experience and help others by leaving ratings and comments.
                        </Typography>


                        <Typography variant="h4" sx={{py:3}}>Join the TRVLR Community Today</Typography>
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