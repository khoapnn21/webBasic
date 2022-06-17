import './Home.css';
const Home = () => {
    const image = [
        {
            id: 0,
            image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        },
        {
            id: 1,
            image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        },
        {
            id: 2,
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        },
        {
            id: 3,
            image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        },
    ];
    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    {image.map((i) => (
                        <div className="carousel-item active" key={i.id}>
                            <img
                                src={i.image}
                                className="d-block w-25 imgCarousel "
                                alt="/"
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Home;
