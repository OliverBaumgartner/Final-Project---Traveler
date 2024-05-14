import React, {useState} from "react";
import axios from "axios";

import {jwtDecode} from "jwt-decode";

function Login(){
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

        }catch(error){
            console.log(error)
        }
    }
    return(
        <div className="firm-container">
            <h1>Login</h1>
            <form className="registration-form" onSubmit={login}>
            <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    id=""
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;