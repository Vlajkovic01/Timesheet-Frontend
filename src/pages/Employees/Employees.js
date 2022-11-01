import CreateEmployeeModal from "./CreateEmployeeModal";
import {Fragment, useEffect, useState} from "react";
import classes from "../../Style.module.css";
import EmployeeList from "./EmployeeList";
import Pagination from "../../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getEmployees} from "../../redux/employee/employeeSlice";

const Employees = () => {
    const [modal, setModal] = useState(false);

    const [searchQuery, setSearchQuery] = useState({page:0});

    const dispatch = useDispatch();
    const {employees, numberOfPages} = useSelector((state) => state.employee);

    useEffect(() => {
        dispatch(getEmployees(searchQuery));
    }, [searchQuery]);

    const showModalHandler = () => {
        setModal(prevState => !prevState);
    };

    const setPageHandler = (pageNumber) => {
        setSearchQuery({page: pageNumber});
    };

    return (
        <Fragment>
            <CreateEmployeeModal onClose={showModalHandler} modal={modal}/>
            <div className={classes.wrapper}>
                <section className={classes['content']}>
                    <div className={classes['main-content']}>
                        <h2 className={classes['main-content__title']}>Employees</h2>
                        <div className={classes['table-navigation']}>
                            <button onClick={showModalHandler}
                               className={`${classes['table-navigation__create']} ${classes['btn-modal']}`}><span style={{marginTop: "10px"}}>Create new employee</span></button>
                        </div>
                        <EmployeeList employees={employees}/>
                    </div>
                    <Pagination setPage={setPageHandler} numberOfPages={numberOfPages}/>
                </section>
            </div>
        </Fragment>
    );
};

export default Employees;