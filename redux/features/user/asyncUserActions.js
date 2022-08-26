import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    'user/getUser',  async (data) => {
        const userData = await fetch('http://localhost:3000/api/getUserData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "token": data.token,
                "userId": data.userId,
                "customerId": data.customerId,
            })
        }).then(res => res.json()).then(data => data);

        return userData.data.customer;
    });

export const updateUser = createAsyncThunk('user/updateUser', async (data) => {
    const updatedUserData = await fetch(process.env.UPDATE_USER_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "token": data.token,
            "userId": data.userId,
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email
        })
    })
        .then(res => res.json())
        .then(data => data)

    return updatedUserData.data.updateCustomer.customer;
});