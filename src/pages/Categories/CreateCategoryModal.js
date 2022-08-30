import classes from "../../Style.module.css";

const CreateCategoryModal = (props) => {
    return (
        <div className={`${classes.modal} ${props.modal ? `${classes['modal--show']}` : ''}`}>
            <div className={classes.modal__content}>
                <h2>Create new category</h2>
                <button className={classes.modal__close} onClick={props.onClose}>
                    <span className={classes.modal__icon}></span>
                </button>
                <form>
                    <ul className={classes.info__form}>
                        <li className={classes.info__list}>
                            <label className={classes.info__label}>Category name:</label>
                            <input type="text" className={classes['in-text']}/>
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