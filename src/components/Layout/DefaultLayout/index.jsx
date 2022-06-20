import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import './DefaultLayout.css';
function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div className="content col-md-10">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
