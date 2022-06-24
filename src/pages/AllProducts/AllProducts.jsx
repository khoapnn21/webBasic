import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../components/GlobalModuleCss/GlobalModuleCss.css';

const AllProducts = () => {
    const products = useSelector((state) => state.products);

    const [searchParams] = useSearchParams();

    const searchTerm = searchParams.get('inputText') || '';
    const rangeNumber = searchParams.get('rangeNumber') || '';

    const filterProducts = products.filter(
        (product) =>
            // if (product.price >= rangeNumber) {
            //     if (!searchTerm) {
            //         return product;
            //     } else {
            //         return product.title.toLowerCase().includes(searchTerm);
            //     }
            // }

            product.title.toLowerCase().includes(searchTerm) &&
            product.price >= rangeNumber,
    );

    return (
        <div className="row row-cols-2 row-cols-md-3 g-4 mt-2">
            {filterProducts.map((product, index) => (
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
    );
};

export default AllProducts;
