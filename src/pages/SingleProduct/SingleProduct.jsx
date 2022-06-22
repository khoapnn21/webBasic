import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCarts, increaseCarts } from '../../features/carts/cartsSlice';
import Loading from '../Loading/Loading';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const carts = useSelector((state) => state.carts);
    const isUser = localStorage.getItem('token');
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => res.json())
            .then((item) => setProduct(item))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const checkUser = () => {
        if (isUser) {
            navigate('/cart');
        } else {
            navigate('/userLogin');
        }
    };

    const handleAddToCart = () => {
        if (carts.find((c) => c.productId === Number(params.id))) {
            let subState = carts.find((c) => c.productId === Number(params.id));
            dispatch(
                increaseCarts({
                    id: subState.productId,
                    quantity: subState.quantity,
                }),
            );
        } else {
            dispatch(
                addCarts({
                    productId: Number(params.id),
                    quantity: 1,
                }),
            );
        }
    };
    return (
        <>
            <div className="row row-cols-2 row-cols-md-2 g-4">
                <div className="col">
                    <div>
                        <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.category}
                            style={{ height: 450, width: 450 }}
                        />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div className="text-muted">${product.price}</div>
                    </div>
                    <br />
                    <button
                        className="btn btn-outline-success"
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
        </>
    );
};

export default SingleProduct;
