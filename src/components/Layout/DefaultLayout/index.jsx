import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Footer from './Footer/Footer';
import './DefaultLayout.css';
function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className=" d-flex">
                <div className="col-md-2 ">
                    <SideBar />
                </div>
                <div className="col-md-10 content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
