import {Link} from "react-router-dom";
import classes from "../../Style.module.css";
import logo from "../../assets/images/logo-white.png";
import {useSelector} from "react-redux";

const Logo = () => {
    const {isLoggedIn} = useSelector((state) => state.auth);

    return (
        <Link to={isLoggedIn ? '/timesheet' : '/login'} className={classes.logo}>
            <img src={logo} alt="Logo"/>
        </Link>
    );
};

export default Logo;