// import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import { Link } from "react-router-dom";
import Logos from './../assets/images/logos/logo.jpg'
const Logo = () => {
  return (
    <Link to="/">
      {/* <LogoDark /> */}
            <img
              src={Logos}
              alt="Logo"
              className="rounded-circle"
              width="150"
              style={{alignSelf:"center", marginLeft:20}}
            ></img>
    </Link>
  );
};

export default Logo;
