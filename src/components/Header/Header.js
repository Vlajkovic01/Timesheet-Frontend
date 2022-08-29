import classes from "../../Style.module.css";
import Navigation from "./Navigation/Navigation";
import User from "./User";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes['inner-wrap']}>
                <Logo/>
                <Navigation/>
                <User/>
            </div>
        </header>
    );
};

export default Header;