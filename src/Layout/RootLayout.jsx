
import Footer from "../Pages/Footer";


import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
   
     <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
