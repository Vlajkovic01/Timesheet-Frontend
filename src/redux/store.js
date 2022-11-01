import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import categoryReducer from "./category/categorySlice";
import employeeReducer from "./employee/employeeSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        employee: employeeReducer
    }
});