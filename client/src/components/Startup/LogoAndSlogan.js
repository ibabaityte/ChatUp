import {Link} from "react-router-dom";

// styles import
import {link} from "../../styles/CommonStyles";
import {logo} from "../../styles/startup/StartupPageStyles";

const logoAndSlogan = () => {
    return (
        <div className="logoContainer">
            <Link to="/" style={{...link, ...logo}}>
                <h1 className="logo">ChatUp</h1>
            </Link>
            <h3 className="slogan">ChatUp brings freedom and connection, while helping people communicate.</h3>
        </div>
    );
}

export default logoAndSlogan;
