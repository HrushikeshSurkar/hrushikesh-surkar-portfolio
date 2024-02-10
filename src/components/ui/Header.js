import React from "react";
import NavbarComponent from "../../pages/Navbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
const Header = () => {
  return (
    <section>
      <NavbarComponent />
      <Home />
      <About experience={"10 Months"} />
    </section>
  );
};

export default Header;
