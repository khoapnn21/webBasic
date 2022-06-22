import { useDispatch } from 'react-redux';
import {
    deleteCarts,
    decreaseCarts,
    increaseCarts,
} from '../../features/carts/cartsSlice';
import './Cart.css';
function CartProduct({ product }) {
    const dispatch = useDispatch();
    const prices = (product.quantity * product.price).toFixed(2);
    const handleDecrease = () => {
        dispatch(decreaseCarts({ id: product.id, quantity: product.quantity }));
    };
    const handleIncrease = () => {
        dispatch(increaseCarts({ id: product.id, quantity: product.quantity }));
    };
    const handleDelete = () => {
        dispatch(deleteCarts({ id: product.id }));
    };
    return (
        <>
            <div
                className="d-flex align-items-center quantity gap-4 m-4"
                key={product.id}
            >
                <img
                    className="cartImg"
                    src={product.image}
                    alt={product.title}
                />
                <span>
                    <b>Quantity: </b>
                </span>
                <button className="btn " type="button" onClick={handleDecrease}>
                    -
                </button>
                <input
                    className="inputQuantity"
                    readOnly
                    value={product.quantity}
                />
                <button className="btn " type="button" onClick={handleIncrease}>
                    +
                </button>
                <button
                    className="btn btn-outline-danger"
                    type="button "
                    onClick={handleDelete}
                >
                    Delete
                </button>
                <span>
                    <b>Price:</b> ${product.price}
                </span>
                <span>
                    {' '}
                    <b>Total Price:</b> ${prices}
                </span>
            </div>
        </>
    );
}

export default CartProduct;
