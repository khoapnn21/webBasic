import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout/index';
import { addProducts } from './features/products/productsSlice';
import { addUsers } from './features/users/usersSlice';
import { addCarts } from './features/carts/cartsSlice';
import Loading from './pages/Loading/Loading';

import './App.css';
function App() {
    const dispatch = useDispatch();
    const userName = localStorage.getItem('userName');
    const users = useSelector((state) => state.users);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/users`)
            .then((res) => res.json())
            .then((item) => {
                dispatch(addUsers(item));
                setIsLoading(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((item) => {
                dispatch(addProducts(item));
                setIsLoading(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    useEffect(() => {
        if (userName) {
            const userId = users.find((user) => user.username === userName);
            fetch(`https://fakestoreapi.com/carts/user/${userId?.id}`)
                .then((res) => res.json())
                .then((item) => {
                    const product = item[0].products;
                    dispatch(addCarts(product));
                    setIsLoading(true);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [users]);
    return (
        <Router>
            <>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {!isLoading ? <Loading /> : <Page />}
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </>
        </Router>
    );
}

export default App;
