import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import './DefaultLayout.css';
function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container-fluid d-flex">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
