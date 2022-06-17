import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const isToken = localStorage.getItem('token');

    const checkUser = () => {
        localStorage.clear();

        if (isToken) {
            navigate('/');
        } else {
            navigate('/userLogin');
        }
    };

    let iconBag;
    if (isToken) {
        iconBag = (
            <button
                className="btn btn-outline-success "
                style={{ width: 50 }}
                onClick={() => navigate('/cart')}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </button>
        );
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        {' '}
                        Shopping
                    </Link>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo03"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/allProducts" className="nav-link">
                                    All products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/allCategories"
                                    className="nav-link "
                                    tabIndex="-1"
                                >
                                    AllCategories
                                </Link>
                            </li>
                        </ul>
                        <div>
                            {iconBag}

                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                style={{ width: 100, marginLeft: 10 }}
                                onClick={checkUser}
                            >
                                {isToken ? 'Logout' : 'Login'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
