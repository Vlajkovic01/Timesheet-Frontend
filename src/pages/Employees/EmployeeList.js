import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = (props) => {
    return (
        <div>
            {props.employees.map(employee => <EmployeeListItem key={employee.id} employee={employee}/>)}
        </div>
    );
};

export default EmployeeList;