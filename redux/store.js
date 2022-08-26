import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../redux/features/cart/cartSlice';
import userSlice from '../redux/features/user/userSlice';
import authSlice from '../redux/features/auth/authSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userSlice,
        auth: authSlice,
    }
});