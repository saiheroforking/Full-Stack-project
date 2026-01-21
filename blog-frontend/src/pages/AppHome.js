// import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
// import API from "../api/axios";

function AppHome() {
    return(
        <div>
            <h1>Create Blog Post.</h1>
            <Link to='/Post_Create'>Create</Link>
        </div>
    );
}

export default AppHome;
