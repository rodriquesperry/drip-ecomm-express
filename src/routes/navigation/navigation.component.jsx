import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as DripLogo } from "../../asstes/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <DripLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
          <Link className="nav-link" to="/cart">
            CART
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;