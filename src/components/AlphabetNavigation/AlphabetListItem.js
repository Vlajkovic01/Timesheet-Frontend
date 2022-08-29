import classes from "../../Style.module.css";
import {NavLink} from "react-router-dom";

const AlphabetListItem = (props) => {

    return (
        <li className={classes.alphabet__list}>
            <NavLink className={(navData) => (navData.isActive ? `${classes['alphabet__button--active']}` : ``) + ` ${classes.alphabet__button}`} to={"/categories/" + props.text}>{props.text}</NavLink>
        </li>
    );
};

export default AlphabetListItem;