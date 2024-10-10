import React from "react";
import Header from "../../ui/Header/Header";
import MainSection from "../../ui/MainSection/MainSection";
import Footer from "../../ui/Footer/Footer";
const MainLayout = () => {
  return (
    <main>
      <Header />
      <MainSection experience={"10 Months"} />
      <Footer />
    </main>
  );
};

export default MainLayout;
