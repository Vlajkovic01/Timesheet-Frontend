import classes from "../../Style.module.css";

const CreateEmployeeModal = (props) => {
    return (
        <div className={`${classes.modal} ${props.modal ? classes['modal--show'] : ''}`}>
            <div className={classes.modal__content}>
                <h2>Create new employee</h2>
                <button className={classes.modal__close} onClick={props.onClose}>
                    <span className={classes.modal__icon}></span>
                </button>
                <form>
                    <div className={classes.info__form}>
                        <ul className={classes.info__wrapper}>
                            <li className={classes.info__list}>
                                <label className={classes.info__label}>Name:</label>
                                <input type="text" className={classes['in-text']}/>
                            </li>
                            <li className={classes.info__list}>
                                <label className={classes.report__label}>Username:</label>
                                <input type="text" className={classes['in-text']}/>
                            </li>
                            <li className={classes.info__list}>
                                <label className={classes.report__label}>Hours per week:</label>
                                <input type="text" className={classes['in-text']}/>
                            </li>
                            <li className={classes.info__list}>
                                <label className={classes.report__label}>Email:</label>
                                <input type="text" className={classes['in-text']}/>
                            </li>
                            <li className={classes['radio-button__wrapper']}>
                                <ul className={classes['info__list-wrapper']}>
                                    <li className={classes['info__list-title']}>
                                        <h4 className={classes['radio-button__title']}>Status:</h4>
                                    </li>
                                    <li className={classes['info__list-radio-button']}>
                                        <input type="radio" id="rdo1" className={classes['radio-input']}
                                               name="radio-group-status"/>
                                            <label htmlFor="rdo1" className={classes['radio-label']}> <span
                                                className={classes['radio-border']}></span>Active</label>
                                    </li>
                                    <li className={classes['info__list-radio-button']}>
                                        <input type="radio" className={classes['radio-input']} name="radio-group-status"/>
                                            <label htmlFor="rdo1" className={classes['radio-label']}> <span
                                                className={classes['radio-border']}></span>Inactive</label>
                                    </li>
                                </ul>
                                <ul className={classes['info__list-wrapper']}>
                                    <li className={classes['info__list-title']}>
                                        <h4 className={classes['radio-button__title']}>Role:</h4>
                                    </li>
                                    <li className={classes['info__list-radio-button']}>
                                        <input type="radio" id="rdo2" className={classes['radio-input']}
                                               name="radio-group-role"/>
                                            <label htmlFor="rdo2" className={classes['radio-label']}> <span
                                                className={classes['radio-border']}></span>Admin</label>
                                    </li>
                                    <li className={classes['info__list-radio-button']}>
                                        <input type="radio" className={classes['radio-input']} name="radio-group-role"/>
                                            <label htmlFor="rdo2" className={classes['radio-label']}> <span
                                                className={classes['radio-label']}></span>Worker</label>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={classes['btn-wrap']}>
                        <button type="submit" className={`${classes.btn} ${classes['btn--green']}`}><span>Invite an employee</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeeModal;