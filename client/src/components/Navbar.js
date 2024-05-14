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
                <h1>IDO</h1>
            </div>
            <div className="links">
                {token ? (
                    <div>
                        <Link to="/todos">Todos</Link>
                        <Link onClick={handleLogout} to="/login">Logout</Link>
                    </div>
                ):(
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;