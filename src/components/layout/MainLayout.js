import React from "react";
import Home from "../../pages/Home";
import NavbarComponent from "../../pages/Navbar";
const MainLayout = () => {
  return (
    <main>
      <NavbarComponent />
      <Home />;
    </main>
  );
};

export default MainLayout;
