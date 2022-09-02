import classes from "../../Style.module.css";
import {useDispatch} from "react-redux";
import {getCategories} from "../../redux/category/categorySlice";

const AlphabetListItem = (props) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (!props.active) {
            dispatch(getCategories({name: props.text}));
        } else {
            dispatch(getCategories({name: ''}));
        }

        props.setActiveLetter(props.text);
    };

    return (
        <li className={classes.alphabet__list}>
            <button onClick={clickHandler}
                    className={`${classes.alphabet__button} ${props.active ? classes['alphabet__button--active'] : ''}`}>{props.text}</button>
        </li>
    );
};

export default AlphabetListItem;