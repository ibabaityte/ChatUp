import {Route, Routes} from "react-router-dom";

// component imports
import StartupPage from "./components/Startup/StartupPage";
import Messenger from "./components/messages/Messenger";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route element={<PublicRoutes/>}>
                    <Route path="/*" element={<StartupPage/>}/>
                </Route>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/messenger" element={<Messenger/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
