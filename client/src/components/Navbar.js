import React from "react";
import {Link} from "react-router-dom"
import{jwtDecode} from "jwt-decode";

function Navbar(){
    let token;
    let decoded
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token")
        decoded = jwtDecode(token);
        console.log(decoded);
    }
    function handleLogout(){
        if(localStorage.getItem("token")){
            if(window.confirm("Are you sure you want to logout?")){
                localStorage.removeItem("token");
                console.log("logout successfull")
            }
        }
    }
    return(
        <div> 
            <div className="logo">
                <h1>TRVLR</h1>
            </div>
            <div className="links">
                {token ? ( //if you have a token and therefore are logged in
                    <div>
                        <Link to="/newdaytrip">New Daytrip</Link>
                        <Link to="/daytrips">Daytrips</Link>
                        <Link onClick={handleLogout} to="/">Logout</Link>
                    </div>
                ):( // if you don' t have a token and therefore are not logged in
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/daytrips">Daytrips</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;