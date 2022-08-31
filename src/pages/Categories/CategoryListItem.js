import classes from "../../Style.module.css";
import {useRef, useState} from "react";
import categoryService from "../../api/services/categoryService";

const CategoryListItem = (props) => {
    const [toggle, setToggle] = useState(false);
    const [name, setName] =useState(props.name);
    const inputNameRef = useRef();

    const showCategoryHandler = (event) => {
        setToggle(prevState => !prevState);
    };

    const onDeleteHandler = () => {
        props.onDelete(props.id)
    };

    const onUpdateHandler = async (event) => {
        event.preventDefault();

        const response = await categoryService.update(props.id, inputNameRef.current.value)

        setName(response.data.name);
    };

    return (
        <div className={classes.accordion}>
            <div className={classes.accordion__intro} onClick={showCategoryHandler}>
                <h4 className={classes.accordion__title}>{name}</h4>
            </div>
            <form className={classes.accordion__content} style={{display: toggle ? "block" : "none"}}>
                <div>
                    <div className={classes.info__form}>
                        <ul className={classes.info__wrapper}>
                            <li className={classes.info__list}>
                                <label className={classes.info__label}>Category name:</label>
                                <input type="text" className={classes['in-text']} defaultValue={name} ref={inputNameRef}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes['btn-wrap']}>
                    <button type="submit" className={`${classes.btn} ${classes['btn--green']}`}
                            onClick={onUpdateHandler}><span>Save changes</span></button>
                    <button type="button" className={`${classes.btn} ${classes['btn--red']}`} onClick={onDeleteHandler}>
                        <span>Delete</span></button>
                </div>
            </form>
        </div>
    );
};

export default CategoryListItem;