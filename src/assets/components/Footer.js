import "../styles/footer.scss"
import logo from "../images/kasa_logo_blk.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <img src={logo} alt="kasa logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
};
export default Footer;
