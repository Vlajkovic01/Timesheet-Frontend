import classes from "../../Style.module.css";
import {useState} from "react";

const AlphabetListItem = (props) => {
    const [active, setActive] = useState(false);


    const clickHandler = () => {
        setActive(prevState => !prevState);
    };

    return (
        <li className={classes.alphabet__list}>
            <button onClick={clickHandler} className={`${classes.alphabet__button} ${active ? `${classes['alphabet__button--active']}` : ''}`}>{props.text}</button>
        </li>
    );
};

export default AlphabetListItem;