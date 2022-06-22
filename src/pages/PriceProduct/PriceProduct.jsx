import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function PriceProduct() {
    const locations = useLocation();
    const URLparams = new URLSearchParams(locations.search);
    const min = URLparams.get('min');
    const max = URLparams.get('max');

    const products = useSelector((state) => state.products);
    const sortProduct = products.filter(
        (product) => min < product.price && product.price < max,
    );
    return (
        <div className="row row-cols-2 row-cols-md-3 g-4 ">
            {sortProduct.map((product, index) => (
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
                            <h5 className="card-title">{product.category}</h5>
                            <p className="card-text">{product.title}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                $ {product.price}
                            </small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PriceProduct;
