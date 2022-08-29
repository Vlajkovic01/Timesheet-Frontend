import {Link} from "react-router-dom";
import classes from "../../Style.module.css";
import logo from "../../assets/images/logo-white.png";

const Logo = () => {
    return (
        <Link to="/index" className={classes.logo}>
            <img src={logo} alt="Logo"/>
        </Link>
    );
};

export default Logo;