import api from "../api";

const getCategories = async (searchQuery) => {
    let response;
    if (searchQuery !== null) {
        response = await api.get('/category', {params: {name: searchQuery}});
    } else {
        response = await api.get('/category');
    }
    return response.data
};

const create = async (name) => {
    let response;
    if (name !== null || name !== "") {
        response = await api.post("/category", {name: name});
    }

    return response.data;
}

const categoryService = {
    getCategories,
    create
}

export default categoryService;