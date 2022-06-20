import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import CartProduct from './CartProduct';
function Cart() {
    const navigate = useNavigate();
    const productItem = useSelector((state) => state.products);
    const users = useSelector((state) => state.users);
    const carts = useSelector((state) => state.carts);
    const userName = localStorage.getItem('userName');
    const userId = users.find((user) => user.username === userName);
    const cartId = carts.find((cart) => cart.id === userId.id);
    const cartProductId = cartId.products.map((product) =>
        Object.assign(
            { quantity: product.quantity },
            productItem.find((p) => p.id === product.productId),
        ),
    );

    const [items, setItems] = useState(cartProductId);
    console.log(items);
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

                        <div>Date: {cartId.date}</div>
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
