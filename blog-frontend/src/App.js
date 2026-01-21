import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import "./App.css";
import AppHome from "./pages/AppHome";
import PostCreate from "./pages/PostCreate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<AppHome />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/AppHome" element={<AppHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/Post_Create" element={<PostCreate />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
