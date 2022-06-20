import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../components/GlobalModuleCss/GlobalModuleCss.css';
import { addCarts } from '../../features/carts/cartsSlice';

import { useDispatch } from 'react-redux/es/exports';
const SingleProduct = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});

    const params = useParams();

    const navigate = useNavigate();
    const isUser = localStorage.getItem('token');
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => res.json())
            .then((item) => setProduct(item))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [params.id]);

    const checkUser = () => {
        if (isUser) {
            navigate('/cart');
        } else {
            navigate('/userLogin');
        }
    };

    const handleAddToCart = () => {
        dispatch(
            addCarts({
                productId: params.id,
                quantity: 1,
            }),
        );
    };

    return (
        <>
            <div className="row row-cols-2 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.category}
                            style={{ height: 450 }}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                $ {product.price}
                            </small>
                        </div>
                    </div>
                    <br />
                    <div>
                        <button
                            className="btn btn-outline-primary"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="btn btn-outline-success"
                            onClick={checkUser}
                        >
                            My Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
