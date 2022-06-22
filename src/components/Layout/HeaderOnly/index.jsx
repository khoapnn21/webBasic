import Header from './Header/Header';
import Footer from './Footer/Footer';
import './HeaderOnly.css';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container-fluid" style={{ minHeight: 1000 }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;
