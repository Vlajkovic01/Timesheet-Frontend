import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "../../api/services/authService";

const initialState = {
    token: authService.getToken(),
    email: authService.getCurrentUserEmail(),
    isLoggedIn: authService.isLoggedIn(),
    isAdmin: authService.isAdmin(),
    isLoading: false,
    isError: false,
    message: ''
};

export const login = createAsyncThunk('auth/login', async (loginData, thunkAPI) => {
    try {
        return await authService.login(loginData)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.message = '';
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.isAdmin = false;
            state.token = '';
            state.email = '';
            authService.logout();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.isAdmin = authService.isAdmin();
                state.token = action.payload['accessToken'];
                state.email = authService.getCurrentUserEmail();
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.token = null;
            })
    }
});

export const {reset, logout} = authSlice.actions;
export default authSlice.reducer;

