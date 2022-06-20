import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addProducts } from './features/products/productsSlice';
import { addUsers } from './features/users/usersSlice';

import { Fragment } from 'react';

import './App.css';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((item) => {
                dispatch(addProducts(item));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/users`)
            .then((res) => res.json())
            .then((item) => {
                dispatch(addUsers(item));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

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
                                        <Page />
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
