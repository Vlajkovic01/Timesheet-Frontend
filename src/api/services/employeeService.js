import api from "../api";

const getEmployees = async (searchQuery) => {
    let response;
    if (searchQuery !== null) {
        response = await api.get('/employee', {params: {page: searchQuery.page, size: 3}});
    } else {
        response = await api.get('/employee');
    }
    return response.data
};

const employeeService = {
    getEmployees,

}

export default employeeService;