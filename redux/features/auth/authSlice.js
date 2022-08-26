import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    authenticated: false,
    userToken: null,
    userId: null,
    customerId: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            if (!action.payload) {
                state.userToken = null;
            } else {
                state.userToken = action.payload;
                state.authenticated = true;
            }
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setCustomerId: (state, action) => {
            state.customerId = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('customerId');
            state.userToken = null;
            state.userId = null;
            state.customerId = null;
            state.authenticated = false;
        },
    }
});

export const { setToken, setUserId, setCustomerId, logout } = authSlice.actions;
export default authSlice.reducer;