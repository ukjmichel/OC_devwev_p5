import Footer from "./Footer";
import Header from "./Header";
import "../styles/layout.scss";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <div className="layout-content">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
