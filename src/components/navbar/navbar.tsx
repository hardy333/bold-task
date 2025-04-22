import Divider from "../../ui/divider/divider";
import Styles from "./styles.module.css";
// import Logo from "@/assets/Cyber-Division-Logo-Full 2.svg";
// import Logo from "@/assets/logo2.svg";
import Logo from "@/assets/logo-final.svg";

const Navbar = () => {
  return (
    <header className={Styles.header}>
      <div className={` ${Styles.headerCont} container`}>
        <img
          src={Logo}
          alt="Cyber division logo, webiste logo"
          className={Styles.logo}
        />
      </div>
      <Divider className={Styles.divider} />
    </header>
  );
};

export default Navbar;
