import classes from "../../../Style.module.css";
import NavigationItem from "./NavigationItem";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {isLoggedIn, isAdmin} = useSelector((state) => state.auth);

    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__menu}>
                {isLoggedIn && <NavigationItem linkTo={'/timesheet'} text={'Timesheet'}/>}
                {isAdmin && <NavigationItem linkTo={'/clients'} text={'Clients'}/>}
                {isAdmin && <NavigationItem linkTo={'/projects'} text={'Projects'}/>}
                {isAdmin && <NavigationItem linkTo={'/categories'} text={'Categories'}/>}
                {isAdmin && <NavigationItem linkTo={'/employees'} text={'Employees'}/>}
                {isLoggedIn && <NavigationItem linkTo={'/reports'} text={'Reports'}/>}
            </ul>
        </nav>
    );
};

export default Navigation;