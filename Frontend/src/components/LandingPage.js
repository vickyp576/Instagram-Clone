import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../utils/tokenStorage";
export default function LandingPage() {

  const navigate = useNavigate();
    useEffect(() => {
        if(getToken()) navigate("/posts/all");
    }, [])

  return <div id='home-page'>
    <h1><em>Instagram</em></h1>
    <div><Link to={"/Login"} id="login">Login</Link></div> 
    <p>Dont have account ?</p>
    <div><Link to={"/register"} id="signup">Sign Up</Link></div> 
  </div>
}