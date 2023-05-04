import { Outlet } from "react-router-dom";
import Header from "./component/header/Header.component";

const Layout = () => {
   return (
      <>
         <header>
            <Header/>
         </header>
         <main>
            <Outlet />
         </main>
      </>
   );
};

export default Layout;
