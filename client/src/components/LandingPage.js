import React, {useState} from "react";
import axios from "axios";
import Login from "../components/Login"
import Register from "../components/Register";
import { Link, useNavigate } from "react-router-dom";

import {jwtDecode} from "jwt-decode";
import { Container, Typography } from "@mui/material";

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
                sx={{
                    bgcolor: "tomato",}}>
                {token ? (
                    <div>
                        <Typography variant="h3">Hello {decoded.username}</Typography>
                        <Typography variant="h2">this is the Landing Page</Typography>
                        <Typography variant="h2">click 
                            <Link to={"/daytrips"}>here</Link> 
                            if you want to continue to all the available Daytrips
                        </Typography>
                        <Typography variant="h2"> or <Link to={"/newdaytrip"}>here</Link> if you want to create a new Daytrip</Typography>
                    </div>
                ):(
                <Container sx={{
                        display: 'inline-flex',
                        justifyContent: 'space-around'
                        }}>
                    <Container sx={{border:1}}>
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

                </Container>
                <Container sx={{
                    border: 1
                }}>
                    <Register/>
                </Container>
                </Container>
                )}

            </Container>
    )
}

export default LandingPage;