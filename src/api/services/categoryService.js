import api from "../api";

const getCategories = async (searchQuery) => {
    let response;
    if (searchQuery !== null) {
        response = await api.get('/category', {params: {name: searchQuery}});
    } else {
        response = await api.get('/category');
    }

    return response.data;
};

const categoryService = {
    getCategories
}

export default categoryService;