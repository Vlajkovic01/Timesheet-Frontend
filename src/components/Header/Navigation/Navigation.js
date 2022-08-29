import classes from "../../../Style.module.css";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__menu}>
                <NavigationItem linkTo={'/index'} text={'Timesheet'}/>
                <NavigationItem linkTo={'/clients'} text={'Clients'}/>
                <NavigationItem linkTo={'/projects'} text={'Projects'}/>
                <NavigationItem linkTo={'/categories'} text={'Categories'}/>
                <NavigationItem linkTo={'/employees'} text={'Employees'}/>
                <NavigationItem linkTo={'/reports'} text={'Reports'}/>
            </ul>
        </nav>
    );
};

export default Navigation;