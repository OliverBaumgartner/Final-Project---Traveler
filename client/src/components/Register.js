import React, {useState} from "react";
import axios from "axios";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let token;
    let decoded;

    const register = async (event) =>{
        event.preventDefault();
        try{
            let user = {username, email, password};
            let res = await axios.post("http://localhost:8000/user/register", user);
            alert("regisered successfully, Please Log in")
        } catch(error){}
    };

    return (
        <Box 
            className="form-container"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor:"black",
                p:5
            }}
        >
          <Typography 
              variant="h4"
              noWrap
              component="a"
              sx={{
                  m: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'white',
                  textDecoration: 'none',
              }}
          >
            Register
          </Typography>
          <form onSubmit={register} className="registration-form">
            <TextField 
                id="outlined-basic" 
                label="Username" 
                variant="outlined"
                type="Username"
                InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                onChange={(e) => setUsername(e.target.value)}
                sx={{m:2,
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
                label="Email" 
                variant="outlined"
                type="Username"
                InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                sx={{m:2,
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
                type="Username"
                InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                sx={{m:2,
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
            <Box sx={{display: "flex", justifyContent: "center"}}>
            <Button 
                variant="outlined" 
                type="submit"
                size="medium"
                sx={{
                    m:1,
                    color:"white",
                    borderColor:"white",
                    ":hover" : {borderColor: "white"}
                }}
            >
                Register 
            </Button>
            </Box>
            </form>
        </Box>
    )
}

export default Register;