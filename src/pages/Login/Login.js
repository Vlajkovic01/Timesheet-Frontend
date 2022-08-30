import classes from "../../Style.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import authService from "../../api/services/authService";

const Login = () => {
    const email = useRef();
    const password = useRef();

    const [login, setLogin] = useState(true);
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();

        await authService.login(email.current.value, password.current.value).then(response => {
            navigate('/index')
        }).catch(err => {
            setLogin(false);
        });
    }

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
                            {!login && <p>Email or password is incorrect</p>}
                        </div>
                        <div className={classes['btn-wrap']}>
                            <label className={classes['initial-form__checkbox']}><input type="checkbox" name="remember-me"/>Remember me</label>
                            <Link to="/forgot-password"
                               className={`${classes.btn} ${classes['btn--transparent']}`}><span>Forgot password</span></Link>
                            <button type="submit" className={`${classes.btn} ${classes['btn--green']}`}><span>Login</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;