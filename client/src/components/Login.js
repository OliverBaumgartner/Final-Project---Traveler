import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {jwtDecode} from "jwt-decode";
import { TextField, Box, Typography, Button } from "@mui/material";

function Login(){
    const navigate = useNavigate("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let token;
    let decoded;

    const login = async (event) =>{
        event.preventDefault();
        try{
            let user = {email, password};
            let res = await axios.post("http://localhost:8000/user/login", user);
            console.log(res.data.msg);
            token = res.data.token;
            localStorage.setItem("token", token);
            navigate("/");
        }catch(error){
            console.log(error)
        }
    }
    return(
        <Box className="firm-container" >
            <form className="login-form" onSubmit={login}>
            <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined"
                type="email"
                InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                onChange={(e) => setEmail(e.target.value)}
                sx={{mx:2,
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      fontWeight: "bold",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                        },
                      },
                      "& .MuiInputLabel-outlined": {
                        color: "white",
                        fontWeight: "bold",
                        "&.Mui-focused": {
                          color: "white",
                          fontWeight: "bold",
                        },
                      },
                    },
                  }}
                />
             <TextField 
                id="outlined-basic" 
                label="Password" 
                variant="outlined"
                type="password"
                InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                    mx:2,
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      fontWeight: "bold",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                        },
                      },
                      "& .MuiInputLabel-outlined": {
                        color: "white",
                        fontWeight: "bold",
                        "&.Mui-focused": {
                          color: "white",
                          fontWeight: "bold",
                        },
                      },
                    },
                  }}
                />
                <Button 
                    variant="outlined" 
                    type="submit"
                    size="medium"
                    sx={{
                        m:1,
                        color:"white",
                        borderColor:"white",
                        ":hover" : {borderColor: "white"},
                    }}
                      >
                        Login 
                </Button>
            </form>
        </Box>
    )
}

export default Login;