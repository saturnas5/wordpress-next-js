import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalValue: 0,
        taxes: 0,
        totalProducts: 0
    },
    reducers: {
        addProduct: (state, action) => {
            // Checking if product exist in cart
            ///////////////////////////////////////////////////////////////
            const existing = state.products.find(prod => prod.id === action.payload.id)

            // Updating product quantity if product already in cart
            ///////////////////////////////////////////////////////////////
            if (existing) {
                state.products.map(product => {
                    if (action.payload.id === product.id) {
                        return {...product, quantity: product.quantity += 1}
                    }
                    return product;
                });

                // Counting total cart value if product quantity updated
                ///////////////////////////////////////////////////////////////
                state.totalValue = state.products.reduce((total, product) => {
                    return total += product.price * product.quantity
                }, 0);

                // Counting total products count in cart
                ///////////////////////////////////////////////////////////////
                state.totalProducts = state.products.reduce((total, product) => {
                    return total + product.quantity
                }, 0)
            } else {
                // Adding product to cart first time
                ///////////////////////////////////////////////////////////////
                state.products = [...state.products, {...action.payload}];

                // Counting total cart value if product first time added
                ///////////////////////////////////////////////////////////////
                state.totalValue = state.products.reduce((total, product) => {
                    return total += product.price * product.quantity
                }, 0);

                // Counting total products count in cart
                ///////////////////////////////////////////////////////////////
                state.totalProducts = state.products.reduce((total, product) => {
                    return total + product.quantity
                }, 0)
            }
        },
        removeProduct: (state, action) => {
            // Removing product from cart
            ///////////////////////////////////////////////////////////////
            state.products = state.products.filter(product => product.id !== action.payload.id);

            // Counting total products count in cart
            ///////////////////////////////////////////////////////////////
            state.totalProducts = state.products.reduce((total, product) => {
                return total + product.quantity
            }, 0);

            // Counting total cart value if product was removed from cart
            ///////////////////////////////////////////////////////////////
            state.totalValue = state.products.reduce((total, product) => {
                return total += product.price * product.quantity
            }, 0);
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;