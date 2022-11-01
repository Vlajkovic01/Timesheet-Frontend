import classes from "../../../Style.module.css";
import {NavLink} from "react-router-dom";

const NavigationItem = (props) => {
    return (
        <li className={classes.navigation__list}>
            <NavLink to={props.linkTo}
                     className={(navData) => (navData.isActive ? `${classes['navigation__button--active']}` : ``) +
                         ` ${classes.btn} ${classes.navigation__button}`}>{props.text}</NavLink>
        </li>
    );
};

export default NavigationItem;