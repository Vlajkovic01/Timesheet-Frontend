import classes from "../../Style.module.css";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={classes['initial-form']}>
            <div className={classes.wrapper}>
                <div className={classes['main-content']}>
                    <h1 className={classes['main-content__title']}>Login</h1>
                    <form className={classes['info']}>
                        <ul className={classes.info__form}>
                            <li className={classes.info__list}>
                                <label className={classes.info__label}>Email:</label>
                                <input type="text" className={classes['in-text']}/>
                            </li>
                            <li className={classes.info__list}>
                                <label className={classes.report__label}>Password:</label>
                                <input type="text" className={classes['in-text']}/>
                            </li>
                        </ul>
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