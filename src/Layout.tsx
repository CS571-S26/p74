import { Outlet } from "react-router";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
