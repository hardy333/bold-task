import Divider from "@/ui/divider/divider";
import Styles from "./styles.module.css";
// import Logo from "@/assets/Cyber-Division-Logo-Full 2.svg";
import Logo from "@/assets/logo6.svg";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Divider className={Styles.divider} />
      <div className="container">
        <div className={Styles.grid}>
          {/* 1 */}
          <div>
            <img src={Logo} alt="" />
          </div>

          <section className={Styles.listBox}>
            <h5 className={Styles.heading}>Information</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Origins</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
            </ul>
          </section>
          {/* 2 */}
          <section className={Styles.listBox}>
            <h5 className={Styles.heading}>Contact Us</h5>
            <ul>
              <li>
                <a href="#">contact@cyberdivisino.tn</a>
              </li>
              <li>
                <a href="#">+216 29 065 054</a>
              </li>
              <li>
                <a href="#">Susah, Imm Ibrahim, 6th Floor</a>
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h5 className={Styles.heading}>Follow us On Social Media</h5>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
