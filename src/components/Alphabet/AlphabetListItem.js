import classes from "../../Style.module.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getCategories} from "../../redux/category/categorySlice";

const AlphabetListItem = (props) => {
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const clickHandler = () => {
        setActive(prevState => !prevState);

        if (!active) {
            dispatch(getCategories(props.text))
        } else {
            dispatch(getCategories(null))
        }
    };

    return (
        <li className={classes.alphabet__list}>
            <button onClick={clickHandler}
                    className={`${classes.alphabet__button} ${active ? `${classes['alphabet__button--active']}` : ''}`}>{props.text}</button>
        </li>
    );
};

export default AlphabetListItem;