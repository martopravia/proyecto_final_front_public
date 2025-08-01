import { Outlet } from "react-router";
import Navbar from "./AppNavbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-grow-1">
        <div className="position-fixed w-100 top-0 z-3"></div>
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
