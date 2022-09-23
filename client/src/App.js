import React from "react";
import {Route, Routes} from "react-router-dom";

// component imports
import StartingPage from "./components/StartingPage";
import Messenger from "./components/messages/Messenger";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PublicRoutes/>}>
                    <Route path="/" element={<StartingPage/>}/>
                </Route>
                <Route path="/" element={<ProtectedRoutes/>}>
                    <Route path="/messenger" element={<Messenger />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
