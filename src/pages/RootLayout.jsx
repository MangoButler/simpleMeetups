import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";
import MainFooter from "../components/Layout/MainFooter";
import Layout from "../components/Layout/Layout";

const RootLayout = (props) => {
  return (
    <>
      <MainNavigation />
      <Layout>
        <Outlet />
      </Layout>
      <MainFooter />
    </>
  );
};

export default RootLayout;
