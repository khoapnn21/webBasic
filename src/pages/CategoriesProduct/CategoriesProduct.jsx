import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../components/GlobalModuleCss/GlobalModuleCss.css';

const CategoriesProduct = () => {
    const [categories, setCategories] = useState([]);
    const cates = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${cates.category}`)
            .then((res) => res.json())
            .then((item) => setCategories(item))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [cates.category]);

    return (
        <>
            <div className="row row-cols-2 row-cols-md-4 g-4 ">
                {categories.map((cate) => (
                    <div className="col" key={cate.id}>
                        <div className="card h-100 ">
                            <Link to={/allProducts/ + cate.id}>
                                <img
                                    src={cate.image}
                                    className="card-img-top "
                                    alt={cate.title}
                                />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{cate.category}</h5>
                                <p className="card-text">{cate.title}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    $ {cate.price}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CategoriesProduct;
