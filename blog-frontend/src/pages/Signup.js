import React, { useState } from "react";
import API from "../api/axios";

function Signup() {
    // 1️⃣ State create cheyyadam
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 2️⃣ Button click ayithe ee function call avutundi
    const handleSignup = async () => {
        try {
            // 3️⃣ Backend ki data pampistunnam
            await API.post("signup/", {
                username: username,
                email: email,
                password: password,
            });

            // 4️⃣ Success response vachaka
            alert("Account created, please login");
        } catch (error) {
            const err = error.response?.data;
            alert(
                err?.username?.[0] ||
                err?.email?.[0] ||
                err?.password?.[0] ||
                "Signup failed"
            );
        }

    };

    return (
        <div className="page">
            <h2>Create Account</h2>

            {/* 6️⃣ Username input */}
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />

            {/* 7️⃣ Email input */}
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            {/* 8️⃣ Password input */}
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* 9️⃣ Button */}
            <button onClick={handleSignup}>Get Started</button>
        </div>
    );
}

export default Signup;
