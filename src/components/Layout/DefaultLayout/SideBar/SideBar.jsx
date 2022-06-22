import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((item) => setCategories(item))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="wrapperSideBar">
            <div>
                <h5>Categories</h5>
                <ul className="cateList">
                    {categories.map((cate, index) => (
                        <li
                            onClick={() => navigate(`/allCategories/${cate}`)}
                            key={index}
                        >
                            {cate}{' '}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h5>Prices</h5>
                <ul className="cateList">
                    <li onClick={() => navigate(`/priceProduct?min=0&max=100`)}>
                        {' '}
                        0 - $100{' '}
                    </li>
                    <li
                        onClick={() =>
                            navigate(`/priceProduct?min=100&max=200`)
                        }
                    >
                        {' '}
                        $100 - $200{' '}
                    </li>
                    <li
                        onClick={() =>
                            navigate(`/priceProduct?min=200&max=10000`)
                        }
                    >
                        {' '}
                        $200 - ~{' '}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
