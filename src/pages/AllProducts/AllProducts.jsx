import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addCarts } from '../../features/carts/cartsSlice';
import '../../components/GlobalModuleCss/GlobalModuleCss.css';

const AllProducts = () => {
    const products = useSelector((state) => state.products);

    return (
        <>
            <div className="row row-cols-2 row-cols-md-3 g-4 ">
                {products.map((product, index) => (
                    <div className="col w-25" key={index}>
                        <div className="card h-100 ">
                            <Link to={'/allProducts/' + product.id}>
                                <img
                                    src={product.image}
                                    className="card-img-top "
                                    alt={product.title}
                                />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {product.category}
                                </h5>
                                <p className="card-text">{product.title}</p>
                            </div>
                            <div className="card-footer">
                                <div>
                                    <small className="text-muted">
                                        $ {product.price}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllProducts;
