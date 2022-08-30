import classes from "../../Style.module.css";
import {useState} from "react";

const CategoryListItem = (props) => {
    const [toggle, setToggle] = useState(false);

    const showCategoryHandler = (event) => {
        setToggle(prevState => !prevState);
    };

    return (
        <div className={classes.accordion}>
            <div className={classes.accordion__intro} onClick={showCategoryHandler}>
                <h4 className={classes.accordion__title}>{props.name}</h4>
            </div>
            <form className={classes.accordion__content} style={{display: toggle ? "block" : "none"}}>
                <div>
                    <div className={classes.info__form}>
                        <ul className={classes.info__wrapper}>
                            <li className={classes.info__list}>
                                <label className={classes.info__label}>Category name:</label>
                                <input type="text" className={classes['in-text']} defaultValue={props.name}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes['btn-wrap']}>
                    <button type="submit" className={`${classes.btn} ${classes['btn--green']}`}><span>Save changes</span></button>
                    <button type="button" className={`${classes.btn} ${classes['btn--red']}`}><span>Delete</span></button>
                </div>
            </form>
        </div>
    );
};

export default CategoryListItem;