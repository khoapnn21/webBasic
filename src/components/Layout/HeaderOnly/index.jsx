import Header from './Header/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container-fluid">{children}</div>
        </div>
    );
}

export default HeaderOnly;
