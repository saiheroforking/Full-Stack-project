import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Login() {
    // 1️⃣ State for form
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // 2️⃣ Navigation hook
    const navigate = useNavigate();

    // 3️⃣ Login function
    const handleLogin = async () => {
        try {
            // Backend ki username + password pampistunnam
            const res = await API.post("token/", {
                username: username,
                password: password,
            });

            // 4️⃣ Token save cheyyadam
            localStorage.setItem("token", res.data.access);

            // 5️⃣ Home page ki redirect
            navigate("/AppHome");
        } catch (error) {
            alert("Invalid username or password");
        }
    };
    

    return (
        <div className="page">
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
