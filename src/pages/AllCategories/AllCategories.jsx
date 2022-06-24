import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/GlobalModuleCss/GlobalModuleCss.css';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((item) => setCategories(item))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const image = [
        {
            id: 0,
            image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        },
        {
            id: 1,
            image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        },
        {
            id: 2,
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        },
        {
            id: 3,
            image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        },
    ];
    return (
        <>
            <div className="row row-cols-2 row-cols-md-4 g-4">
                {categories.map((cate, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <Link to={'/allCategories/' + cate}>
                                <img
                                    src={image[index].image}
                                    className="card-img-top"
                                    alt={cate}
                                />
                            </Link>
                            <div className="card-body"></div>

                            <div className="card-footer">
                                <small className="text-muted">{cate}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllCategories;
