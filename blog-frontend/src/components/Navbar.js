import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    // 🔑 Check login status
    const isLoggedIn = localStorage.getItem("token");

    // 🚪 Logout function
    const handleLogout = () => {
        localStorage.removeItem("token"); // token delete
        navigate("/login");               // login page ki velladam
    };

    return (
        <nav className="navbar">
            <h2 className="logo">BlogApp</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

                {/* 👇 Dynamic part */}
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                ) : (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
