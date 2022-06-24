import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartProduct from './CartProduct';

import './Cart.css';
function Cart() {
    const navigate = useNavigate();
    const productItem = useSelector((state) => state.products);
    const carts = useSelector((state) => state.carts);
    const cartProductId = carts.map((product) =>
        Object.assign(
            { quantity: product.quantity },
            productItem.find((p) => p.id === product.productId),
        ),
    );

    let sumTotalPrices = cartProductId
        .map((product) => product.price * product.quantity)
        .reduce((preVal, currentVal) => preVal + currentVal, 0)
        .toFixed(2);

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
                        <div className="d-flex m-5">
                            {cartProductId.length === 0 ? (
                                <div className="mx-auto d-flex">
                                    <div style={{ width: 300, padding: 10 }}>
                                        <b>Your shopping cart is empty</b>
                                    </div>
                                    <button
                                        className="btn btn-outline-success w-50 d-flex justify-content-center "
                                        onClick={() => navigate('/allProducts')}
                                    >
                                        {' '}
                                        Go shopping{' '}
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    {cartProductId.map((product) => (
                                        <CartProduct product={product} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="col">
                            Date: {new Date().toISOString()}{' '}
                        </div>{' '}
                        <div className="col">
                            <b>All Total Price:</b> ${sumTotalPrices}{' '}
                        </div>
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
