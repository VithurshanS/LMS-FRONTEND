import { useEffect, useState } from "react";
import { loginUser, type LoginRequest } from "../api/authService";
import { useAuth } from "react-oidc-context";

const Login = () => {
    const auth = useAuth();

    if(auth.isLoading) {
        return <div>Loading...</div>;
    }
    if(auth.error){
        return <div>Login failed: {auth.error.message}</div>;
    }
    if(auth.isAuthenticated){
        return <div>Welcome, {auth.user?.profile.preferred_username}!</div>;
    }  
    return(
        <div className="container">
            <h2>Login</h2>
            <button onClick={() => auth.signinRedirect()}>Login</button>
        </div>
    )
    
}

export default Login;

