import classes from "../../Style.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth/authSlice";

const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isLoggedIn, email} = useSelector((state) => state.auth);

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className={classes.user}>
            {isLoggedIn &&
                <div className={classes.user__nav}>
                    <h2 className={classes.user__name}>{email}</h2>
                    <ul className={classes.user__dropdown}>
                        <li className={classes.user__list}><Link className={classes.user__link} to="/change-password">Change
                            password</Link></li>
                        <li className={classes.user__list}><Link className={classes.user__link}
                                                                 to="/settings">Settings</Link></li>
                        <li className={classes.user__list}><Link className={classes.user__link} to="/export-data">Export
                            all
                            data</Link></li>
                    </ul>
                </div>}
            {isLoggedIn &&
                <ul>
                    <li className={classes.logout}>
                        <button className={classes.logout__link} onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>}
            {!isLoggedIn &&
                <ul>
                    <li className={classes.logout}>
                        <Link className={classes.logout__link} to="/login">Login</Link>
                    </li>
                </ul>}
        </div>
    );
};

export default User;