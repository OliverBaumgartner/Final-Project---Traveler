import React, {useState} from "react";
import axios from "axios";
import Login from "../components/Login"
import Register from "../components/Register";

import {jwtDecode} from "jwt-decode";

function LandingPage(){
    return(
        <div>
            <h1>This is the LandingPage here you can:</h1>
            <Login/>
            <h1>and:</h1>
            <Register/>
        </div>
    )
}

export default LandingPage;