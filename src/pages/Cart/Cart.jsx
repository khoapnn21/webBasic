import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
function Cart() {
    const navigate = useNavigate();
    const productItem = useSelector((state) => state.products);
    const users = useSelector((state) => state.users);
    const carts = useSelector((state) => state.carts);
    const userName = localStorage.getItem('userName');
    const userId = users.find((user) => user.username === userName);
    const cartId = carts.find((cart) => cart.id === userId.id);

    const productId = cartId.products.map((product) => product.productId);

    const cartProductId = productId.map((a) =>
        productItem.find((p) => p.id === a),
    );

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
                        <div className="mt-4 mb-4">
                            {cartProductId.map((product) => (
                                <img
                                    className="cartImg"
                                    src={product.image}
                                    alt={product.title}
                                    key={product.id}
                                />
                            ))}
                        </div>
                        <div className="mt-4 mb-4">
                            {cartId.products.map((product, index) => (
                                <>
                                    <span>Quantity: </span>
                                    <input
                                        className="inputQuantity"
                                        readOnly
                                        value={product.quantity}
                                        key={index}
                                    />
                                </>
                            ))}
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
