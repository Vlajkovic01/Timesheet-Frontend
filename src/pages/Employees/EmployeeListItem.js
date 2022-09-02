import classes from "../../Style.module.css";
import {useState} from "react";

const EmployeeListItem = (props) => {
    const [toggle, setToggle] = useState(false);

    const showEmployeeHandler = () => {
        setToggle(prevState => !prevState);
    };

    return (
        <div className={classes.accordion}>
            <div className={classes.accordion__intro} onClick={showEmployeeHandler}>
                <h4 className={classes.accordion__title}>{props.employee.name}</h4>
            </div>
            <form className={classes.accordion__content} style={{display: toggle ? "block" : "none"}}>
                <div>
                    <div className={classes.info__form}>
                        <ul className={classes.info__wrapper}>
                            <li className={classes.info__list}>
                                <label className={classes.info__label}>Name:</label>
                                <input type="text" className={classes['in-text']} defaultValue={props.employee.name}/>
                            </li>
                            <li className={classes.info__list}>
                                <label className={classes.report__label}>Username:</label>
                                <input type="text" className={classes['in-text']} defaultValue={props.employee.username}/>
                            </li>
                            <li className={classes.info__list}>
                                <label className={classes.report__label}>Hours per week:</label>
                                <input type="text" className={classes['in-text']} defaultValue={props.employee.hoursPerWeek}/>
                            </li>
                            <li className={classes.info__list}>
                                <label className={classes.report__label}>Email:</label>
                                <input type="text" className={classes['in-text']} defaultValue={props.employee.email}/>
                            </li>
                            <li className={classes['info__list-title']}>
                                <h4 className={classes['radio-button__title']}>Status:</h4>
                            </li>
                            <li className={classes['info__list-radio-button']}>
                                <input type="radio" className={classes['radio-input']}
                                       name="radio-group-status-second" defaultChecked={(props.employee.status === 'ACTIVE')}/>
                                    <label className={classes['radio-label']}><span className={classes['radio-border']}></span>Active</label>
                            </li>
                            <li className={classes['info__list-radio-button']}>
                                <input type="radio" className={classes['radio-input']} name="radio-group-status-second" defaultChecked={(props.employee.status === 'INACTIVE')}/>
                                    <label className={classes['radio-label']}><span className={classes['radio-border']}></span>Inactive</label>
                            </li>
                            <li className={classes['info__list-title']}>
                                <h4 className={classes['radio-button__title']}>Role:</h4>
                            </li>
                            <li className={classes['info__list-radio-button']}>
                                <input type="radio" className={classes['radio-input']}
                                       name="radio-group-role-second" defaultChecked={(props.employee.role === 'ADMIN')}/>
                                    <label className={classes['radio-label']}> <span className={classes['radio-border']}></span>Admin</label>
                            </li>
                            <li className={classes['info__list-radio-button']}>
                                <input type="radio" className={classes['radio-input']} name="radio-group-role-second" defaultChecked={(props.employee.role === 'WORKER')}/>
                                    <label className={classes['radio-label']}> <span className={classes['radio-border']}></span>Worker</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes['btn-wrap']}>
                    <button type="submit" className={`${classes['btn']} ${classes['btn--green']}`}><span>Save changes</span></button>
                    <button type="button" className={`${classes['btn']} ${classes['btn--red']}`}><span>Delete</span></button>
                    <button type="button" className={`${classes['btn']} ${classes['btn--orange']}`}><span>Change password</span></button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeListItem;