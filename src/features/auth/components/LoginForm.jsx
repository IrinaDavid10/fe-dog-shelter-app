import { useEffect, useState } from "react";
import {loginAdmin} from "../../api/authApi.js";


function LoginForm({isLoggedIn, setIsLoggedIn}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // verifica daca userul este deja logat
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            console.log("Found existing token:",token);
            setIsLoggedIn(true);
        }
    },[]);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const response = await loginAdmin(username,password);
        if(response === null){
            alert("Cannot login");
            setIsLoggedIn(false);
        }else{
        localStorage.setItem('token', response.token);
        alert(JSON.stringify(response));
        setIsLoggedIn(true);
        }
    }

    useEffect(()=>{
        console.log("Logged in: " +isLoggedIn);
    },[isLoggedIn])

    return(
        <>
        {isLoggedIn ? "You are logged in" : "Cannot log you in"}
        <form onSubmit={handleSubmit}>
            <label>
                Enter username:
                <input
                type = "text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Enter password:
                <input
                type = "password"
                name = "password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br/>
            <button type="submit">Login</button>
        </form>
        </>
    );
    
}
export default LoginForm;