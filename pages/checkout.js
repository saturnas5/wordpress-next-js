import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className=''>
            
        </div>
    )
};

export default Checkout;