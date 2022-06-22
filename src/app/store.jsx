import { configureStore } from '@reduxjs/toolkit';

import productsReducer from '../features/products/productsSlice';
import usersReducer from '../features/users/usersSlice';
import cartsReducer from '../features/carts/cartsSlice';
import totalProductReducer from '../features/totalProduct/totalProductSlice';
export default configureStore({
    reducer: {
        products: productsReducer,
        users: usersReducer,
        carts: cartsReducer,
        totalProducts: totalProductReducer,
    },
});
