import { useEffect, useState } from "react";
import {loginAdmin} from "../../api/authApi.js";
function LoginForm({a,b}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const response = await loginAdmin(username,password);
        if(response === null){
            alert("Cannot login");
            b(false);
        }else{
        alert(JSON.stringify(response));
        b(true);
        }
    }

    useEffect(()=>{
        console.log("Logged in: " +a);
    },[a])

    return(
        <>
        {a ? "You are logged in" : "Cannot log you in"}
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