import { createSlice } from "@reduxjs/toolkit";
import { getUser, updateUser } from "./asyncUserActions";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
    },
    reducers: {
        removeUserInfo: state => {
            state.userInfo = null;
        }
    },
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.userInfo = null;
        },
        [getUser.fulfilled]: (state, action) => {
            state.userInfo = action.payload
        },
        [updateUser.pending]: (state, action) => {
            return;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.userInfo = {
                ...state.userInfo,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
        },
    }
});

export const { removeUserInfo } = userSlice.actions;
export default userSlice.reducer;