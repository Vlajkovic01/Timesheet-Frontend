import classes from "../../Style.module.css";
import categoryService from "../../api/services/categoryService";
import {useState} from "react";


const CreateCategoryModal = (props) => {
    const [name, setName] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        categoryService.create(name);
        props.onCreate({name: name});

        setName("");
        props.onClose();
    };

    const changeHandler = (event) => {
        event.preventDefault();

        setName(event.target.value);
    }

    return (
        <div className={`${classes.modal} ${props.modal ? `${classes['modal--show']}` : ''}`}>
            <div className={classes.modal__content}>
                <h2>Create new category</h2>
                <button className={classes.modal__close} onClick={props.onClose}>
                    <span className={classes.modal__icon}></span>
                </button>
                <form onSubmit={submitHandler}>
                    <ul className={classes.info__form}>
                        <li className={classes.info__list}>
                            <label className={classes.info__label}>Category name:</label>
                            <input type="text" className={classes['in-text']} required={true} value={name} onChange={changeHandler}/>
                        </li>
                    </ul>
                    <div className={classes['btn-wrap']}>
                        <button type="submit" className={`${classes.btn} ${classes['btn--green']}`}>
                            <span>Save changes</span></button>
                        <button type="button" className={`${classes.btn} ${classes['btn--red']}`}><span>Delete</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCategoryModal;