import Home from '../pages/Home/Home';
import AllProducts from '../pages/AllProducts/AllProducts';
import AllCategories from '../pages/AllCategories/AllCategories';
import SingleProduct from '../pages/SingleProduct/SingleProduct';
import CategoriesProduct from '../pages/CategoriesProduct/CategoriesProduct';
import UserLogin from '../pages/UserLogin/UserLogin';
import Cart from '../pages/Cart/Cart';
import HeaderOnly from '../components/Layout/HeaderOnly/index';
import NoPage from '../pages/NoPage/NoPage';
const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly },
    { path: '/allProducts', component: AllProducts },
    { path: '/allCategories', component: AllCategories },
    { path: '/allProducts/:id', component: SingleProduct },
    { path: '/allCategories/:category', component: CategoriesProduct },
    { path: '/userLogin', component: UserLogin, layout: HeaderOnly },
    { path: '/cart', component: Cart, layout: HeaderOnly },

    { path: '*', component: NoPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
