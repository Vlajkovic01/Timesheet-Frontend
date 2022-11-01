import classes from "../../Style.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {login, reset} from "../../redux/auth/authSlice";

const Login = () => {
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isError, isLoggedIn} = useSelector((state) => state.auth);

    const submitHandler = async (event) => {
        event.preventDefault();

        dispatch(login({email: email.current.value, password: password.current.value}));
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/timesheet')
        }
        dispatch(reset());
    }, [isLoggedIn, navigate, dispatch]);

    return (
        <div className={classes['initial-form']}>
            <div className={classes.wrapper}>
                <div className={classes['main-content']}>
                    <h1 className={classes['main-content__title']}>Login</h1>
                    <form className={classes['info']} onSubmit={submitHandler}>
                        <ul className={classes.info__form}>
                            <li className={classes.info__list}>
                                <label className={classes.info__label}>Email:</label>
                                <input type="email" className={classes['in-text']} ref={email} required={true}/>
                            </li>
                            <li className={classes.info__list}>
                                <label className={classes.report__label}>Password:</label>
                                <input type="password" className={classes['in-text']} ref={password} required={true}/>
                            </li>
                        </ul>
                        <div>
                            {isError && <p>Email or password is incorrect</p>}
                        </div>
                        <div className={classes['btn-wrap']}>
                            <label className={classes['initial-form__checkbox']}><input type="checkbox"
                                                                                        name="remember-me"/>Remember me</label>
                            <Link to="/forgot-password"
                                  className={`${classes.btn} ${classes['btn--transparent']}`}><span>Forgot password</span></Link>
                            <button type="submit" className={`${classes.btn} ${classes['btn--green']}`}>
                                <span>Login</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;