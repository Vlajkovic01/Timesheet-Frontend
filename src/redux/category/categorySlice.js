import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import categoryService from "../../api/services/categoryService";

const initialState = {
    categories: [],
    totalElements: 0,
    numberOfPages: 0
};

export const getCategories = createAsyncThunk('categories', async (searchQuery, thunkAPI) => {
    try {
        return await categoryService.getCategories(searchQuery);
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const addCategory = createAsyncThunk('categories/add', async (name, thunkAPI) => {
    try {
        return categoryService.create(name);
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        removeCategory: (state, action) => {
            state.categories = state.categories.filter(category => category.id !== action.payload);
            state.numberOfElements -= 1;

            const remove = async () => {
                await categoryService.deleteCategory(action.payload);
            };
            remove(); //TODO change this impl, with createAsyncThunk
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload['content'];
                state.totalElements = action.payload['totalElements'];
                state.numberOfPages = Math.ceil(action.payload['totalElements'] / action.payload['size']);
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.categories = [...state.categories, action.payload]
                state.numberOfElements += 1;
            })
    }
});

export const {removeCategory} = categorySlice.actions;
export default categorySlice.reducer;