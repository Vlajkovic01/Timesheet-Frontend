import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import employeeService from "../../api/services/employeeService";

const initialState = {
    employees: [],
    totalElements: 0,
    numberOfPages: 0
};

export const getEmployees = createAsyncThunk('employees', async (searchQuery, thunkAPI) => {
    try {
        return await employeeService.getEmployees(searchQuery);
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.employees = action.payload['content'];
                state.totalElements = action.payload['totalElements'];
                state.numberOfPages = Math.ceil(action.payload['totalElements'] / action.payload['size']);
            })
    }
});

export default employeeSlice.reducer;