import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="wrapper-general-main">
      <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;