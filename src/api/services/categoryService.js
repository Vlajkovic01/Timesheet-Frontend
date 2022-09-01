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
    if (name !== null && name !== "") {
        response = await api.post("/category", {name: name});
    }

    return response.data;
}

const deleteCategory = async (id) => {
    if (id !== null && id !== "") {
        await api.delete(`/category/${id}`);
    }
};

const update = async (id, name) => {
    if (id !== null && name !== null) {
        return api.put('/category', {id:id, name:name})
    }
}

const categoryService = {
    getCategories,
    create,
    deleteCategory,
    update
}

export default categoryService;