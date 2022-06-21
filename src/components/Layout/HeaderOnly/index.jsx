import Header from './Header/Header';
import Footer from './Footer/Footer';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container-fluid" style={{ minHeight: 500 }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;
