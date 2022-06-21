import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../features/carts/cartsSlice';
import './Cart.css';
function CartProduct({ product, onDelete }) {
    const [counter, setcounter] = useState(product.quantity);
    const dispatch = useDispatch();

    const handleDecrease = (number) => {
        setcounter(counter - 1);
    };
    const handleIncrease = (number) => {
        setcounter(counter + 1);
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
                <span className="">Quantity: </span>
                <button className="btn " type="button" onClick={handleDecrease}>
                    -
                </button>
                <input className="inputQuantity" readOnly value={counter} />
                <button className="btn " type="button" onClick={handleIncrease}>
                    +
                </button>
                <button
                    className="btn btn-outline-danger"
                    type="button "
                    onClick={() => onDelete(product.id)}
                >
                    Delete
                </button>
            </div>
        </>
    );
}

export default CartProduct;
