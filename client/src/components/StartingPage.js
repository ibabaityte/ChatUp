import React from "react";

import Login from "./users/Login";
import Register from "./users/Register";

const StartingPage = () => {
    return (
        <div>
            <Login/>
            <Register/>
        </div>
    );
}

export default StartingPage;