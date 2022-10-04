import {Route, Routes} from "react-router-dom";

// component imports
import StartupPage from "./components/Startup/StartupPage";
import Messenger from "./components/messages/Messenger";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";

// style imports
import Grid from "@mui/material/Unstable_Grid2";

const App = () => {

    return (
        <Grid container className="App">
            <Routes>
                <Route element={<PublicRoutes/>}>
                    <Route path="/*" element={<StartupPage/>}/>
                </Route>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/messenger" element={<Messenger/>}/>
                </Route>
            </Routes>
        </Grid>
    );
}

export default App;
