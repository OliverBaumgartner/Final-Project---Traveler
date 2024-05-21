import React, {useState} from "react";
import axios from "axios";

function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (event) =>{
        event.preventDefault();
        try{
            let user = {username, email, password};
            let res = await axios.post("http://localhost:8000/user/register", user);
            console.log("regisered successfully")
            console.log(res.data);
        } catch(error){}
    };

    return (
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={register} className="registration-form">
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    id=""
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p></p>
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p></p>
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    id=""
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p></p>
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;