import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import CartProduct from './CartProduct';
import { addCarts } from '../../features/carts/cartsSlice';

function Cart() {
    const navigate = useNavigate();
    const userLocal = localStorage.getItem('userName');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const productItem = useSelector((state) => state.products);
    const carts = useSelector((state) => state.carts);
    const userId = users.find((user) => user.username === userLocal);

    // const cartProductId = carts.products.map((product) =>
    //     Object.assign(
    //         { quantity: product.quantity },
    //         productItem.find((p) => p.id === product.productId),
    //     ),
    // );
    // console.log(cartProductId);
    useEffect(() => {
        if (userLocal) {
            fetch(`https://fakestoreapi.com/carts/user/${userId?.id}`)
                .then((res) => res.json())
                .then((item) => {
                    const product = item[0].products;
                    dispatch(addCarts(product));
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);
    const [items, setItems] = useState([]);
    const handleDelete = (itemId) => {
        setItems(items.filter((i) => i.id !== itemId));
    };
    return (
        <div>
            <div className=" modal-dialog modal-fullscreen-xl-down cartBorder">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Shopping cart</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => navigate('/')}
                        ></button>
                    </div>
                    <div className="modal-body ">
                        <div className="d-grid gap-5 d-flex m-5">
                            <div>
                                {items.map((product) => (
                                    <CartProduct
                                        product={product}
                                        onDelete={handleDelete}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>Date:123</div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => navigate('/')}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => navigate('/')}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
