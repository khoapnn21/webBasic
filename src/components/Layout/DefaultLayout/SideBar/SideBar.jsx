import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [rangeParams, setRangeParams] = useSearchParams();
    const rangeParamsNumber = rangeParams.get('rangeNumber');
    const inputText = rangeParams.get('inputText');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((item) => setCategories(item))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleRange = (e) => {
        const rangeNumber = e.target.value;
        setRangeParams({ rangeNumber });
    };

    return (
        <div className="wrapperSideBar ">
            <div className="border-bottom">
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
            <div className="border-bottom">
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
                            navigate(`/priceProduct?min=200&max=99999`)
                        }
                    >
                        {' '}
                        $200 - ~{' '}
                    </li>
                </ul>
            </div>
            <div>
                <label for="customRange1" class="form-label">
                    Prices range
                </label>
                <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="1000"
                    id="customRange1"
                    onChange={handleRange}
                />
                <label for="customRange1" class="form-label">
                    ${rangeParamsNumber} ~ $1000
                </label>
            </div>
        </div>
    );
}

export default SideBar;
